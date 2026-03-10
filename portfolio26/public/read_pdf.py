import sys
from pypdf import PdfReader

reader = PdfReader('public/rdp-poster.pdf')
for page in reader.pages:
    print(page.extract_text())
