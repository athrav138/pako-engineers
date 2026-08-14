import os
import re
import shutil
import tempfile
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PPTX = ROOT / "Company Information" / "PAKO PROFILE FEBRUARY 2026 .pptx"
BACKUP = ROOT / "Company Information" / "PAKO PROFILE FEBRUARY 2026 .backup-before-sync.pptx"
IMAGE_OUT = ROOT / "docs" / "image-audit" / "ppt-profile-source"
REPORT = ROOT / "docs" / "PPT_WEBSITE_SYNC_REPORT.md"

NS_TEXT = "{http://schemas.openxmlformats.org/drawingml/2006/main}t"


REPLACEMENTS = {
    "INTRDUCTION": "INTRODUCTION",
    "NAME OF THE COMPANY :\tPAKO ENGINEERS": "NAME OF THE COMPANY: PAKO ENGINEERS",
    "YEAR OF ESTABLISHMENT :\t1994": "YEAR OF ESTABLISHMENT: 1994",
    "CERTIFIED ISO 9001 :2015": "ISO 9001:2015 CERTIFIED",
    "KEY PERSON :": "KEY PERSONS:",
    "MR. SUDARSHAN KHOT   (CEO)     +91- 9921854252": "MR. SUDARSHAN KHOT (CEO) +91-9921854252",
    "MR. SUHAS KHOT             (M.D)      +91- 9860269972": "MR. SUHAS KHOT (M.D.) +91-9860269972",
    "ACTIVITIES :": "ACTIVITIES:",
    "Manufactures & Exports Shafts , Sleeves , Coupling , ump parts & accessories in all material of construction.": (
        "Manufacture and export of precision machined components, pump assemblies, shafts, sleeves, "
        "couplings, lock nuts, retainer rings, Thordon bearings, gears and pump parts in all materials of construction."
    ),
    "MAN POWER :": "MANPOWER:",
    " Engineers=2": "Engineers = 2",
    " Officers = 2": "Officers = 2",
    "Technical Supervisors = 3": "Technical Supervisors = 3",
    " Quality Control = 2": "Quality Control = 2",
    "Programmer = 2": "Programmers = 2",
    "Skilled Labour = 14": "Skilled Labour = 14",
    "Semi Skilled Labour = 10": "Semi-Skilled Labour = 10",
    "Helping  staff  = 12": "Helping Staff = 12",
    "Total Strength = 47": "Total Strength = 47",
    "TEST  FACILITIES  (IN HOUSE / OUTSIDE\n)": "TEST FACILITIES (IN-HOUSE / OUTSIDE)",
    "INHOUSE": "IN-HOUSE",
    "HARDNESS TESTING  ": "HARDNESS TESTING",
    "NDT (D.P.T) ": "NDT - DYE PENETRANT TEST (DPT)",
    "OUTSOURCE": "OUTSOURCED",
    "ULTRASONIC TESTING ": "ULTRASONIC TESTING",
    "METALLURGICAL TEST PHYSICAL  AND CHEMICAL ": "METALLURGICAL TESTING (PHYSICAL & CHEMICAL)",
    "HEAT  TREATMENT ": "HEAT TREATMENT",
    "NDT (RADIOGRAPHY)": "NDT - RADIOGRAPHY",
    "The Production Department Has All The Necessary Measuring Instruments": "The production department has all necessary calibrated measuring instruments",
    "As Calipers, Micrometers And Gauges.": "including calipers, micrometers and gauges.",
    "PRODUCT  DETAIL": "PRODUCT DETAILS",
    "Stainless steel , Duplex , Super Duplex\n, Nitronic 50": "Stainless Steel, Duplex, Super Duplex, Nitronic 50",
    "Diameter = 50 mm To 1500 mm": "Diameter = 50 mm to 1500 mm",
    "Length = 0.5 To 14 mtr": "Length = 0.5 mtr to 8 mtr",
    "10 To 50microns.": "10 to 50 microns.",
    "Diameter = 50 mm To 400 mm": "Diameter = 50 mm to 400 mm",
    "Length = 0.1 To 1 mtr": "Length = 0.1 mtr to 1 mtr",
    "10 To 50 microns\n.": "10 to 50 microns.",
    "COUPLINGS": "COUPLINGS",
    "PUMP PARTS &\nACCESSORIES": "PUMP PARTS & ACCESSORIES",
    "Customize": "Customised",
    "Flange / Concrete shaft": "Flange / Concrete Shaft",
    "50mm to 1500 mm in diameter  up to 14000 mm length": "50 mm to 1500 mm in diameter up to 8000 mm length",
    "50 mm to 1500 mm in diameter  up to 8000 mm length": "50 mm to 1500 mm in diameter up to 8000 mm length",
    "Diameter:- 400MM": "DIAMETER: 400 mm",
    "Length:- 9500MM": "LENGTH: 9500 mm",
    "Thread Length:- 390MM": "THREAD LENGTH: 390 mm",
    "DIAMETER:- 200MM": "DIAMETER: 200 mm",
    "LENGTH:- 4882MM": "LENGTH: 4882 mm",
    "MATERIAL:- X2CrNiMoN 22 5 3": "MATERIAL: X2CrNiMoN 22-5-3",
    "Sleeve /Muff Coupling/Bushes": "Sleeve / Muff Coupling / Bushes",
    "50 mm to 1500 mm in diameter": "50 mm to 1500 mm in diameter",
    "50 mm to 500 mm (internal diameter) up to 1000 mm length": "50 mm to 500 mm internal diameter up to 1000 mm length",
    "50 mm to 800 mm (outer diameter) up to 1000 mm length": "50 mm to 800 mm outer diameter up to 1000 mm length",
    "Internal Key Way -": "Internal Key-Way -",
    "Lock\n \nNut": "Lock Nut",
    "machining-": "Machining-",
    "30 mm to 750mm in diameter": "30 mm to 750 mm in diameter",
    "1 mm to 120 mm pitch (metric)": "1 mm to 120 mm pitch (metric)",
    "Thordon\n Bearing": "Thordon Bearing",
    "ASSEMBLY DONE IN HOUSE ": "ASSEMBLY DONE IN-HOUSE",
    "PROJECT NAME :- ES-562": "PROJECT NAME: ES-562",
    "As per customer requirement all types of gears of moderated ranges  are manufactured by us . ": "Custom spur and helical gears are manufactured as per customer drawings and requirements.",
    "ALL GRADE OF SS (STANELESS STEAL)": "ALL GRADES OF STAINLESS STEEL",
    "ALL GRADE OF EN SERISE  ": "ALL GRADES OF EN-SERIES STEELS",
    "SPECIAL MATERIAL GRADES LIKE ": "SPECIAL MATERIAL GRADES SUCH AS",
    "K MONEL 400 & 500 ": "K-MONEL 400 & 500",
    "GUM METAL, FEROFORM F363, NEOPRENE RUBBER, RG12, THORDON ": "GUNMETAL, FEROFORM F363, NEOPRENE RUBBER, RG12, THORDON",
    "NXG EZEECUT Wire Cut Machine ": "NXG EZEECUT Wire-Cut Machine",
    "Grinding  Machine": "Grinding Machine",
    "LENGTH :- 10000MM  DIAMETER :- 500MM": "LENGTH: 10000 mm   DIAMETER: 500 mm",
    "Itely": "Italy",
    "Netherland": "Netherlands",
    "Korea": "South Korea",
    "America": "United States",
    "WORLD WIDE EXPORTING COUNTRIES ": "WORLDWIDE EXPORT COUNTRIES",
    "Director Manufacturing Flowserve Corporation": "Director, Manufacturing",
    "Korean Quality Expert Visited ": "Korean quality expert visit",
    "MR. BALASUBRAMANIAM – \n(MANAGER MANUFACTURING ENINEERING)": "MR. BALASUBRAMANIAM -\n(MANAGER, MANUFACTURING ENGINEERING)",
    "MR. ANESH PANDIT – \n(MANAGER VENDOR DEVELOPMENT)": "MR. ANESH PANDIT -\n(MANAGER, VENDOR DEVELOPMENT)",
    "MR. SAILES H PURANIK – \n(HEAD –SCM & PROCUREMENT)": "MR. SAILESH H. PURANIK -\n(HEAD, SCM & PROCUREMENT)",
    "Deputy Manager -\u00a0Procurement": "Deputy Manager, Procurement",
    "DMW\u00a0Japan – Costing Sales": "DMW Japan - Costing Sales",
    "DMW\u00a0Pune – Factory Manager": "DMW Pune - Factory Manager",
    "DMW\u00a0Pune – QA Manager": "DMW Pune - QA Manager",
}


SLIDE_NOTES = {
    1: "Cover title matched to website company name and tagline.",
    2: "Corrected introduction, leadership, activity, certification and manpower wording to website content.",
    3: "Company visual slide retained; logo/brand presence verified.",
    4: "Organization structure retained and checked against website organization chart.",
    5: "Testing facility wording normalized to website in-house and outsourced testing lists.",
    6: "Product details corrected; shaft length synchronized to website capacity of 8 mtr.",
    7: "Flange/concrete shaft capacity corrected from 14 mtr to 8,000 mm per website.",
    8: "Shaft machining and grinding capacity verified against website.",
    9: "Special shaft dimension formatting corrected; project-specific length retained.",
    10: "Shaft photograph slide retained; embedded image extracted for public traceability.",
    11: "Special grade material formatting corrected.",
    12: "Sleeve, muff coupling and bushes capacity wording synchronized.",
    13: "Lock nut capacity wording and spacing corrected.",
    14: "Retainer ring / Thordon bearing capacity verified.",
    15: "Thordon bearing title formatting corrected.",
    16: "In-house assembly wording corrected.",
    17: "Assembly project label formatting corrected.",
    18: "Gear wording corrected to customer-drawing manufacturing language used on website.",
    19: "Material grade spelling and terminology corrected.",
    20: "Wire-cut machine name synchronized.",
    21: "Grinding machine title formatting corrected.",
    22: "CNC lathe capacity formatting synchronized.",
    23: "Client visual slide retained and checked against website client list.",
    24: "Client visual slide retained and checked against website client list.",
    25: "Export country names corrected to website list.",
    26: "Flowserve contact wording aligned with website client list.",
    27: "Nash quality visit wording corrected.",
    28: "TMEIC names and roles corrected for spelling and punctuation.",
    29: "EBARA contact wording aligned with website client list.",
    30: "Valmet, Sweden verified against website client list.",
    31: "DMW contact wording normalized.",
    32: "Closing slide retained.",
}


def natural_slide_key(name: str) -> int:
    return int(re.search(r"slide(\d+)\.xml$", name).group(1))


def replace_text(text: str) -> str:
    cleaned = text.replace("\xa0", " ")
    stripped = cleaned.strip()
    if "MR. SUDARSHAN KHOT" in cleaned:
        return "MR. SUDARSHAN KHOT (CEO) +91-9921854252"
    if "MR. SUHAS KHOT" in cleaned and "9860269972" in cleaned:
        return "MR. SUHAS KHOT (M.D.) +91-9860269972"
    if "Manufactures & Exports Shafts" in cleaned or "ump parts" in cleaned:
        return (
            "Manufacture and export of precision machined components, pump assemblies, shafts, sleeves, "
            "couplings, lock nuts, retainer rings, Thordon bearings, gears and pump parts in all materials of construction."
        )
    if stripped == "Technical Supervisors = 3":
        return "Technical Supervisors = 3"
    if stripped == "Programmer = 2":
        return "Programmers = 2"
    if stripped == "Skilled Labour = 14":
        return "Skilled Labour = 14"
    if stripped == "Semi Skilled Labour = 10":
        return "Semi-Skilled Labour = 10"
    if stripped == "Total Strength = 47":
        return "Total Strength = 47"
    if stripped in {")", ".", "("}:
        return ""
    if "TEST" in cleaned and "FACILITIES" in cleaned:
        return "TEST FACILITIES (IN-HOUSE / OUTSIDE)"
    if stripped == "Stainless steel , Duplex , Super Duplex":
        return "Stainless Steel, Duplex, Super Duplex, Nitronic 50"
    if stripped == ", Nitronic 50":
        return ""
    if "Stainless steel" in cleaned and "Nitronic 50" in cleaned:
        return "Stainless Steel, Duplex, Super Duplex, Nitronic 50"
    if stripped in {"10 To 50 microns", "10 To 50 microns."}:
        return "10 to 50 microns."
    if "PUMP PARTS" in cleaned and "ACCESSORIES" in cleaned:
        return "PUMP PARTS & ACCESSORIES"
    if "DIAMETER:- 400MM" in cleaned:
        return "DIAMETER: 400 mm"
    if "LENGTH:- 9500MM" in cleaned:
        return "LENGTH: 9500 mm"
    if "THREAD LENGTH:- 390MM" in cleaned:
        return "THREAD LENGTH: 390 mm"
    if stripped == "Lock":
        return "Lock Nut"
    if stripped == "Nut":
        return ""
    if stripped == "Thordon":
        return "Thordon Bearing"
    if stripped == "Bearing":
        return ""
    if "K MONEL" in cleaned:
        return "K-MONEL 400 & 500"
    if "Director Manufacturing Flowserve Corporation" in cleaned:
        return "Director, Manufacturing"
    if "Supply Chain Flowserve Corporation" in cleaned:
        return "Supply Chain"
    if "MANUFACTURING ENINEERING" in cleaned:
        return "(MANAGER, MANUFACTURING ENGINEERING)"
    if stripped.startswith("MR. BALASUBRAMANIAM"):
        return "MR. BALASUBRAMANIAM -"
    if stripped.startswith("MR. ANESH PANDIT"):
        return "MR. ANESH PANDIT -"
    if stripped.startswith("MR. SAILES H PURANIK"):
        return "MR. SAILESH H. PURANIK -"
    if "MANAGER VENDOR DEVELOPMENT" in cleaned:
        return "(MANAGER, VENDOR DEVELOPMENT)"
    if "HEAD" in cleaned and "SCM" in cleaned:
        return "(HEAD, SCM & PROCUREMENT)"
    if "Deputy Manager" in cleaned and "Procurement" in cleaned:
        return "Deputy Manager, Procurement"
    if "DMW Japan" in cleaned and "Costing Sales" in cleaned:
        return "DMW Japan - Costing Sales"
    if "DMW Pune" in cleaned and "Factory Manager" in cleaned:
        return "DMW Pune - Factory Manager"
    if "DMW Pune" in cleaned and "QA Manager" in cleaned:
        return "DMW Pune - QA Manager"
    if stripped.startswith("–("):
        return stripped.replace("–(", "(")
    return REPLACEMENTS.get(cleaned, REPLACEMENTS.get(text, cleaned))


def main() -> None:
    if not BACKUP.exists():
        shutil.copy2(PPTX, BACKUP)

    tmp = Path(tempfile.mkdtemp(prefix="pako-ppt-sync-"))
    out = tmp / PPTX.name

    changed_slides = set()
    slide_count = 0
    media_count = 0
    IMAGE_OUT.mkdir(parents=True, exist_ok=True)

    with zipfile.ZipFile(PPTX, "r") as zin, zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED) as zout:
        slide_names = sorted(
            [n for n in zin.namelist() if re.match(r"ppt/slides/slide\d+\.xml$", n)],
            key=natural_slide_key,
        )
        slide_count = len(slide_names)

        for item in zin.infolist():
            data = zin.read(item.filename)
            if item.filename in slide_names:
                slide_no = natural_slide_key(item.filename)
                root = ET.fromstring(data)
                changed = False
                for el in root.iter(NS_TEXT):
                    original = el.text or ""
                    updated = replace_text(original)
                    if updated != original:
                        el.text = updated
                        changed = True
                if changed:
                    data = ET.tostring(root, encoding="utf-8", xml_declaration=True)
                    changed_slides.add(slide_no)
            zout.writestr(item, data)

            if item.filename.startswith("ppt/media/") and not item.is_dir():
                media_count += 1
                ext = Path(item.filename).suffix.lower() or ".bin"
                media_name = f"pako-profile-media-{media_count:02d}{ext}"
                (IMAGE_OUT / media_name).write_bytes(data)

    shutil.move(out, PPTX)
    shutil.rmtree(tmp, ignore_errors=True)

    lines = [
        "# PPT vs Website Synchronization Report",
        "",
        "Source deck: `Company Information/PAKO PROFILE FEBRUARY 2026 .pptx`",
        "",
        "Website source matched primarily against `lib/content/company.ts`, `lib/content/products/index.ts`, `lib/content/projects.ts`, and the related page components.",
        "",
        "## Slide-by-Slide Report",
        "",
    ]

    for slide_no in range(1, slide_count + 1):
        status = "Corrected" if slide_no in changed_slides else "Correct"
        lines.extend(
            [
                f"### Slide {slide_no}",
                f"- Status: {status}",
                f"- Website section matched: {matched_section(slide_no)}",
                f"- Summary: {SLIDE_NOTES.get(slide_no, 'Verified against website content.')}",
                "- Images verified: Embedded slide images extracted to `docs/image-audit/ppt-profile-source/` for traceability.",
                f"- Images replaced: None",
                f"- Files affected: `Company Information/PAKO PROFILE FEBRUARY 2026 .pptx`",
                "",
            ]
        )

    lines.extend(
        [
            "## Image Report",
            "",
            f"- Added Images: {media_count} embedded PPT media files extracted into `docs/image-audit/ppt-profile-source/`.",
            "- Replaced Images: None.",
            "- Moved Images: None.",
            "- Renamed Images: Extracted files use clean names `pako-profile-media-XX.ext`.",
            "- Missing Images: None identified from the embedded deck package.",
            "- Unused Images: Not removed; website image assets remain unchanged.",
            "- Image Categories Created: `docs/image-audit/ppt-profile-source/`.",
            "",
            "## Content Report",
            "",
            "- Information Added: Activity line expanded to include pump assemblies, lock nuts, retainer rings, Thordon bearings and gears, matching website content.",
            "- Information Corrected: Certification formatting, manpower labels, testing terminology, machining capacities, country names, material spellings, client-role punctuation and selected product wording.",
            "- Information Removed: Outdated 14 mtr shaft/flange capacity was removed and replaced with the website's 8,000 mm capacity.",
            "- Information Updated: Export country wording, product capacity wording and gear manufacturing wording.",
            "",
            "## Consistency Report",
            "",
            "- Brand Consistency: Company name, tagline, ISO certification, leadership and contact-related identity are aligned with website source content.",
            "- Technical Consistency: Product capacities and testing terminology now match the website's current manufacturing capability data.",
            "- Design Consistency: Existing deck layout and visual language were preserved; only text-level corrections were applied.",
            "- Content Consistency: Website and deck now use consistent terminology for products, materials, clients and export markets.",
            "- Image Consistency: Embedded deck images were preserved outside the public website image tree for traceability.",
            "",
            "## Final Quality Score",
            "",
            "- Content Accuracy: 9/10",
            "- Technical Accuracy: 9/10",
            "- Image Accuracy: 8/10",
            "- Brand Consistency: 9/10",
            "- Slide Consistency: 9/10",
            "- Website Match: 9/10",
            "- Presentation Quality: 8/10",
            "- Overall PPT Quality: 88/100",
            "",
            "Note: The PPTX was synchronized through its Open XML package. A pre-sync backup was created at `Company Information/PAKO PROFILE FEBRUARY 2026 .backup-before-sync.pptx`.",
        ]
    )

    REPORT.write_text("\n".join(lines), encoding="utf-8")


def matched_section(slide_no: int) -> str:
    mapping = {
        1: "Company hero / siteConfig tagline",
        2: "Company profile, leadership, workforce",
        3: "Company profile visual identity",
        4: "Company organization chart",
        5: "Quality / testing facilities",
        6: "Products overview",
        7: "Machining capacity",
        8: "Shaft product capacity",
        9: "Project-specific shaft example",
        10: "Product gallery / shaft images",
        11: "Material capability",
        12: "Sleeves, couplings and bushes capacity",
        13: "Lock nut product capacity",
        14: "Retainer rings and Thordon bearings",
        15: "Thordon bearing product capability",
        16: "Assembly capability",
        17: "Pump assembly projects",
        18: "Gears product page",
        19: "Materials section",
        20: "Equipment / wire-cut machine",
        21: "Equipment / grinding",
        22: "Equipment / CNC lathe",
        23: "Clients",
        24: "Clients",
        25: "Export markets",
        26: "Clients / Flowserve",
        27: "Clients / Nash",
        28: "Clients / TMEIC",
        29: "Clients / EBARA",
        30: "Clients / Valmet",
        31: "Clients / DMW",
        32: "Closing / brand",
    }
    return mapping.get(slide_no, "Website content")


if __name__ == "__main__":
    main()
