import argparse
import os
from generate_js_files import generateJsFiles
from generate_html_files import generateHtmlFiles
from generate_search import generateSearch
from validate import validateDataGuide

def parseArgs():
    parser = argparse.ArgumentParser()
    
    parser.add_argument('-a', choices=['all', 'files', 'search', 'validate'], required=True)
    parser.add_argument("-data", help="path to the directory that contains the data files")
    parser.add_argument("-html", help="path to the directory that contains the .html files")
    parser.add_argument("-p", action='store_true', help="whether perforce should be used")

    return parser.parse_args()

def verifyArgs(args):
    if not args.data:
        print ("ERROR: The data directory is not defined. Use -data [dir] to point to the directory that contains the data files.")
        return False
    if not os.path.exists(args.data):
        print ("ERROR: The data directory does not exist: {}".format(args.data))
        return False

    if (args.a == 'all' or args.a == 'files'):
        if not args.html:
            print ("ERROR: The .html directory is not defined. Use -html [dir] to point to the directory that contains the .html files.")
            return False
        if not os.path.exists(args.html):
            print ("ERROR: The .html directory does not exist: {}".format(args.html))
            return False
    
    return True

def main():
    args = parseArgs()
    if not verifyArgs(args):
        return
    
    runAll = args.a == 'all'

    # Generate HTML
    if runAll or args.a == 'files':
        if not generateJsFiles(args.data, args.p):
            return
        if not generateHtmlFiles(args.data, args.html, args.p):
            return

    # Generate search
    if runAll or args.a == 'search':
        if not generateSearch(args.data, args.p):
            return
        
    # Validate
    if runAll or args.a == 'validate':
        if not validateDataGuide(args.data):
            return

if __name__ == "__main__":
    main()