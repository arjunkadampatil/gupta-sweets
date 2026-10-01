"""Generates the six sample menu PDFs in public/pdfs. Run: python3 scripts/generate_pdfs.py"""
from pathlib import Path
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor

OUT = Path(__file__).resolve().parent.parent / "public" / "pdfs"
OUT.mkdir(parents=True, exist_ok=True)
W, H = A4
maroon, gold, cream = HexColor("#7A1F1A"), HexColor("#E8A33D"), HexColor("#FFF8EF")
ink, muted = HexColor("#2A1608"), HexColor("#7A5A43")

MENUS = {
    "gupta-sweets-sweets-menu.pdf": ("Sweets Menu", "Traditional Indian mithai, made fresh every morning", [
        ("Besan Laddoo", "Roasted gram flour, ghee, cardamom", "Rs 520 / kg"),
        ("Motichoor Laddoo", "Fine boondi, saffron, pistachio", "Rs 480 / kg"),
        ("Kaju Katli", "Cashew fudge with silver vark", "Rs 1,100 / kg"),
        ("Jalebi", "Crisp spirals in saffron syrup", "Rs 360 / kg"),
        ("Gulab Jamun", "Khoya dumplings in rose syrup", "Rs 25 / pc"),
        ("Rasgulla", "Soft chhena balls in light syrup", "Rs 25 / pc"),
        ("Milk Cake", "Slow-cooked caramelised milk", "Rs 560 / kg"),
        ("Soan Papdi", "Flaky gram flour and ghee", "Rs 420 / kg")]),
    "gupta-sweets-bakery-menu.pdf": ("Bakery Menu", "Baked in small batches through the day", [
        ("Butter Croissant", "Laminated dough, French butter", "Rs 90"),
        ("Whole Wheat Loaf", "400 g sandwich loaf", "Rs 70"),
        ("Garlic Bread", "Herb butter, toasted", "Rs 120"),
        ("Atta Biscuits", "Jaggery and whole wheat", "Rs 240 / 500 g"),
        ("Choco Chip Cookies", "Dark chocolate chunks", "Rs 300 / 500 g"),
        ("Fruit Rusk", "Twice-baked with tutti frutti", "Rs 160 / 400 g"),
        ("Veg Puff", "Spiced potato and peas", "Rs 35"),
        ("Paneer Puff", "Masala paneer filling", "Rs 45")]),
    "gupta-sweets-gift-boxes.pdf": ("Gift Boxes", "Curated boxes for every occasion", [
        ("Classic Mithai Box", "Assorted 500 g, 6 varieties", "Rs 450"),
        ("Royal Dry Fruit Box", "Kaju katli, badam barfi, anjeer roll", "Rs 1,250"),
        ("Celebration Hamper", "Mithai, namkeen and cookies", "Rs 1,800"),
        ("Wedding Favour Box", "Mini 4-piece box, custom label", "Rs 120 / box"),
        ("Sugar-Free Box", "Dates and dry fruit sweets", "Rs 950"),
        ("Namkeen Combo", "Four 250 g packs", "Rs 520")]),
    "gupta-sweets-festival-specials.pdf": ("Festival Specials", "Seasonal favourites, available for a limited time", [
        ("Diwali Assorted Thali", "12 sweets in a brass-finish tray", "Rs 1,500"),
        ("Ghevar", "Rajasthani honeycomb with rabri", "Rs 650 / kg"),
        ("Holi Gujiya", "Khoya and dry fruit filling", "Rs 600 / kg"),
        ("Rakhi Sweet Box", "With a handmade rakhi", "Rs 550"),
        ("Til Laddoo", "Sesame and jaggery, for Makar Sankranti", "Rs 440 / kg"),
        ("Modak", "Steamed coconut and jaggery", "Rs 30 / pc")]),
    "gupta-sweets-cakes-pastries.pdf": ("Cakes & Pastries", "Eggless options available on every cake", [
        ("Black Forest Cake", "Chocolate sponge, cherries, cream", "Rs 650 / 500 g"),
        ("Pineapple Cake", "Light sponge, fresh pineapple", "Rs 550 / 500 g"),
        ("Red Velvet Cake", "Cream cheese frosting", "Rs 750 / 500 g"),
        ("Rasmalai Cake", "Saffron sponge with rasmalai", "Rs 850 / 500 g"),
        ("Chocolate Truffle Pastry", "Dark ganache layers", "Rs 110"),
        ("Fruit Pastry", "Seasonal fruit and cream", "Rs 95"),
        ("Brownie", "Walnut fudge brownie", "Rs 80")]),
    "gupta-sweets-corporate-orders.pdf": ("Corporate Orders", "Bulk gifting and office celebrations", [
        ("Diwali Corporate Box", "Branded sleeve, 500 g assorted", "From Rs 400 / box"),
        ("Office Snack Tray", "Namkeen, puffs and cookies for 20", "Rs 2,200"),
        ("Client Hamper", "Dry fruits, mithai and greeting card", "From Rs 1,500"),
        ("Event Dessert Counter", "Live jalebi and gulab jamun", "On request"),
        ("Minimum order", "25 boxes for custom branding", "-"),
        ("Lead time", "5 working days for bulk orders", "-")]),
}

for filename, (title, subtitle, items) in MENUS.items():
    c = canvas.Canvas(str(OUT / filename), pagesize=A4)
    c.setTitle(f"Gupta Sweets - {title}"); c.setAuthor("Gupta Sweets")
    c.setFillColor(cream); c.rect(0, 0, W, H, fill=1, stroke=0)
    c.setFillColor(maroon); c.rect(0, H - 150, W, 150, fill=1, stroke=0)
    c.setFillColor(gold); c.rect(0, H - 156, W, 6, fill=1, stroke=0)
    c.setFillColor(HexColor("#FFF3DF")); c.setFont("Times-Bold", 34); c.drawString(50, H - 80, "Gupta Sweets")
    c.setFont("Helvetica", 12); c.drawString(52, H - 104, "Sweets & Bakery  |  Traditional taste, made fresh daily")
    c.setFillColor(gold); c.setFont("Helvetica-Bold", 13); c.drawRightString(W - 50, H - 80, title.upper())
    c.setFillColor(ink); c.setFont("Times-Bold", 26); c.drawString(50, H - 210, title)
    c.setFillColor(muted); c.setFont("Helvetica-Oblique", 12); c.drawString(50, H - 232, subtitle)
    y = H - 285
    for name, desc, price in items:
        c.setFillColor(ink); c.setFont("Helvetica-Bold", 13); c.drawString(50, y, name)
        c.setFillColor(maroon); c.drawRightString(W - 50, y, price)
        c.setFillColor(muted); c.setFont("Helvetica", 10.5); c.drawString(50, y - 16, desc)
        c.setStrokeColor(HexColor("#E6D3BC")); c.setDash(2, 3); c.line(50, y - 28, W - 50, y - 28); c.setDash()
        y -= 56
    c.setFillColor(maroon); c.rect(0, 0, W, 70, fill=1, stroke=0)
    c.setFillColor(HexColor("#FFF3DF")); c.setFont("Helvetica", 10)
    c.drawString(50, 40, "Phone: 0123456789    Email: gupta@gmail.com")
    c.drawString(50, 24, "Sample menu for demonstration. Prices are indicative and may change.")
    c.save()
print(f"Generated {len(MENUS)} PDFs in {OUT}")
