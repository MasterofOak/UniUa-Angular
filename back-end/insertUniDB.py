import sqlite3 as sq
import argparse

# Func to retrive base64 text


def retrive_base64_data(data):
    file = open(data['image'], 'r')
    base64 = file.read()
    file.close()
    return base64


# Set up CLI arguments and parser
parser = argparse.ArgumentParser(description='Sqlite insert data')
parser.add_argument('-id', type=int, help='ID', required=True, dest='id')
parser.add_argument('-name', '-name', type=str,
                    help='NAME', required=True, dest='name')
parser.add_argument('-l', '-location', type=str,
                    help='LOCATION', required=True, dest='location')
parser.add_argument('-w', '-website', type=str,
                    help='WEBSITE', default=None, dest='website')
parser.add_argument('-t', '-type', type=str,
                    help='TYPE', default=None, dest='type')
parser.add_argument('-f', '-focus', type=str,
                    help='FOCUS', default=None, dest='focus')
parser.add_argument('-s', '-score', type=int,
                    help='SCORE', default=None, dest='score')
parser.add_argument('-path', type=str,
                    help='PATH TO BASE64 FILE', default=None, dest='image')
args = parser.parse_args()

# Save parsed args to dictionary
data = vars(args)
data['image'] = retrive_base64_data(data=data)

# Set up sqlite connection
con = sq.connect("universities.db")
cur = con.cursor()

# Execute transaction to insert data  from CLI
cur.execute(
    'INSERT INTO university VALUES(:id,:name,:location,:website,:type,:focus,:score,:image)', data)
con.commit()

# Close connection
con.close()
