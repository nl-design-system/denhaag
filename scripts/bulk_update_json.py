from pathlib import Path
import itertools
import json
# Paths are relative to the root of the project.
SOURCE_DIRS = ['src/components']


class Color:
    PURPLE = '\033[95m'
    CYAN = '\033[96m'
    DARKCYAN = '\033[36m'
    BLUE = '\033[94m'
    GREEN = '\033[92m'
    YELLOW = '\033[93m'
    RED = '\033[91m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'
    END = '\033[0m'


def find_all_package_json() -> list:
    root = Path(__file__).absolute().parent.parent
    nested_files = [sorted(Path(root, src_dir).glob('**/package.json'))
                    for src_dir in SOURCE_DIRS]
    return list(itertools.chain(*nested_files))


def read_package_json(path) -> dict:
    with open(path, 'r') as f:
        data = f.read()
        obj = json.loads(data)
    return obj


def write_package_json(path, data):
    with open(path, 'w') as f:
        json.dump(data, f, indent=4, sort_keys=True)


def update_dict(result: dict, fields: list, value) -> dict:
    current_dict = result
    for i, field in enumerate(fields):
        if i == len(fields) - 1:
            if not field or not value:
                continue
            current_dict[field] = value
        elif not field in current_dict:
            current_dict[field] = dict()
            current_dict = current_dict[field]
        else:
            if not isinstance(current_dict[field], dict):
                # If its not a dict, then know it is. Live with
                current_dict[field] = dict()
            current_dict = current_dict[field]

    return result


def update_package_json(packages, update_pairs):
    for package in packages:
        data = read_package_json(package)
        for fields, value in update_pairs:
            fields = fields.split('.')
            # values = value.split(',')
            # if len(values) == 1:
            #     values = values[0]
            # else:
            #     values = [v for v in values if v]
            data = update_dict(data, fields, value)
        write_package_json(package, data)


if __name__ == "__main__":
    print("""
{}Summary{}

With this tool you can bulk update all field in package.json. You specify a
field and value, the script will update all package.jsons. If the field already
has a value, it will be overwritten. If not, then a new field will be created.
    """.format(Color.BOLD, Color.END))

    files = find_all_package_json()

    if files:
        print('{}SUCCESS: Found {} package{}{}'.format(Color.GREEN, len(
            files), '' if len(files) == 1 else 's', Color.END))
    else:
        print('{}{}ERROR: Found 0 zero packages{}'.format(
            Color.RED, Color.BOLD, Color.END))
        print('ABORTING...')
        exit()

    update_pairs = list()

    while True:
        print("""
{}What field would you like to update?{}

You can provide a name like \'description\' or if the field exists in a json
object, like \'scripts.build\' (seperated by a .)
        """.format(Color.BOLD, Color.END))
        fields = input('Field: ')

        print("""
{}What value should {} have?{}
        """.format(Color.BOLD, fields, Color.END))

        value = input('Value: ')

        update_pairs.append((fields, value))

        print("""
{}Would you like to add/update another field?{}
        """.format(Color.BOLD, Color.END))

        confirm = input('Confirm [Yn]: ')
        if confirm == 'n':
            break

    print("""
{}You have configured the following fields and values:{}
    """.format(Color.BOLD, Color.END))
    for fields, value in update_pairs:
        print('\t *', fields, ':', value)

    while True:
        print("""
{}Do you want to write these change to the package.json files?{}
        """.format(Color.BOLD, Color.END))

        confirm = input('Confirm [Yn]: ')
        if confirm == 'Y':
            update_package_json(files, update_pairs)
            break
        elif confirm == 'n':
            break
