import sys
import os
import shutil

def read_directory_structure(path):
    directory_structure = {}
    for root, dirs, files in os.walk(path):
        relative_root = os.path.relpath(root, path)
        directory_structure[relative_root] = files
    return directory_structure

def create_exchanged_structure(original_path, directory_structure):
    for dir_path, files in directory_structure.items():
        # Split the directory path into parts
        parts = dir_path.split(os.sep)
        
        # Exchange parent and child if possible
        if len(parts) > 1:
            parts[0], parts[1] = parts[1], parts[0]
        
        # Create the new directory path
        new_dir_path = os.path.join(original_path + "_exchanged", *parts)
        
        # Create the new directory
        os.makedirs(new_dir_path, exist_ok=True)
        
        # Copy files to the new directory
        for file in files:
            original_file_path = os.path.join(original_path, dir_path, file)
            new_file_path = os.path.join(new_dir_path, file)
            shutil.copy2(original_file_path, new_file_path)

def main():
    if len(sys.argv) > 1:
        path = sys.argv[1]
        if os.path.isdir(path):
            directory_structure = read_directory_structure(path)
            create_exchanged_structure(path, directory_structure)
            print(f"Exchanged directory structure created at: {path}_exchanged")
        else:
            print(f"Path is not a directory: {path}")
    else:
        print("No argument provided.")

if __name__ == "__main__":
    main()
