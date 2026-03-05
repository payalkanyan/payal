import urllib.request
import xml.etree.ElementTree as ET

url = 'https://payalkanyan.substack.com/feed'
try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response:
        xml_data = response.read()
        
    root = ET.fromstring(xml_data)
    for item in root.findall('.//item'):
        title = item.find('title')
        link = item.find('link')
        pubDate = item.find('pubDate')
        
        title_text = title.text if title is not None else "No Title"
        link_text = link.text if link is not None else "No Link"
        pubDate_text = pubDate.text if pubDate is not None else "No Date"
        
        print(f"Title: {title_text}\nLink: {link_text}\nDate: {pubDate_text}\n---")
except Exception as e:
    print(f"Error: {e}")
