#!/bin/bash

folders=("Contact" "About" "Dashboard" "Login" "Register" "Blogs" "Blog")

for foldername in "${folders[@]}"; do
    mkdir -p "$foldername"

    cat >"$foldername/$foldername.jsx" <<EOL
import './$foldername.scss'

const $foldername = () => {
    return (
        <div>$foldername</div>
    )
}

export default $foldername
EOL

    touch "$foldername/$foldername.scss"
done

echo "Folders and files created successfully."
