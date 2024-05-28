import sqlite3 as sql
import argparse
from datetime import date


def get_data_from_file(path):
    article = {}
    file = open(path, 'r')
    article['title'] = str(file.name).split('/')[-1]
    article['content'] = file.read()
    article['publishDate'] = date.isoformat(date.today())
    return article


# Set up CLI arguments and parser
parser = argparse.ArgumentParser(description='Sqlite insert data')
parser.add_argument('-path', type=str, help='Path to article file',
                    required=True, dest='file')
args = parser.parse_args()

# Save parsed args to dictionary
data = vars(args)

article = get_data_from_file(data['file'])

print(article)
# Set up sqlite connection
con = sql.connect("news.db")
cur = con.cursor()

# Get a num of db records
cur.execute("SELECT COUNT (*) FROM news")
row_count = cur.fetchone()[0]
if row_count is None:
    article['id'] = 1
else:
    article['id'] = row_count+1

# Execute transaction to insert data from CLI
cur.execute(
    'INSERT INTO news VALUES(:id,:title,:content,:publishDate)', article)
con.commit()

# Close connection
con.close()
