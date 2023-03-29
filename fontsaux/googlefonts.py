import urllib.request
import os

fonts = ['Comfortaa', 'Dancing Script', 'Dosis', 'Fira Sans', 'Indie Flower', 'Josefin Sans', 'Karla', 'Lato', 'Lobster', 'Lora', 'Merriweather', 'Montserrat', 'Mulish', 'Noto Sans', 'Open Sans', 'Oswald', 'Pacifico', 'Playfair Display', 'Poppins', 'PT Sans', 'PT Serif', 'Quicksand', 'Raleway', 'Roboto', 'Shadows Into Light', 'Sofia', 'Space Mono', 'Titillium Web', 'Ubuntu']
ind = 0
for font_name in fonts:
    # create a directory to save the font files
    if not os.path.exists(font_name):
      font_name_nospace = font_name.replace(' ', '_')
      os.makedirs(font_name_nospace)

      # download the font files
      url_prefix = "https://fonts.google.com/download?family="
      url_suffix = "&subset=latin"
      url = url_prefix + font_name.replace(" ", "+") + url_suffix
      response = urllib.request.urlopen(url)
      data = response.read()
      with open(font_name + ".zip", "wb") as f:
          f.write(data)

      # extract the font files from the downloaded zip file
      import zipfile
      with zipfile.ZipFile(font_name + ".zip", "r") as zip_ref:
          zip_ref.extractall(font_name_nospace)

      # delete the downloaded zip file
      os.remove(font_name + ".zip")

      print(f"{ind}/{len(fonts)} Downloaded and extracted {font_name} font files to {font_name} directory.")
  
    else:
      print('already downloaded', font_name)

    ind+=1
