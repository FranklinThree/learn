from bs4 import BeautifulSoup
import os

os.chdir(r"E:\Programming\Vue\learn\menus")
# 以只读模式打开文件
file = open('menuSource.txt', 'r', encoding='utf-8')

# 读取文件内容
html_doc = file.read()

# 关闭文件
file.close()

print(html_doc)

soup = BeautifulSoup(html_doc, 'html.parser')
items = soup.find_all('li')


save_file = open("menu.txt", "w", encoding='utf-8')

for item in items:
    value = item.get_text()
    print(value)
    save_file.write(value+"\n")

save_file.close()

