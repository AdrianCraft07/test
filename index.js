function addItems(inHTML, callback){
  fetch('https://raw.githubusercontent.com/AdrianCraft07/test/main/data.json')
        .then(v => v.json())
        .then(data => {
          const isVersion = value =>
            /^[0-9]{1,}[.][0-9]{2}([.]*[0-9]*)*$/.test(value);
          const versions = Object.keys(data)
            .filter(v => isVersion(v))
            .sort()
            .reverse();
          document.querySelector(inHTML).innerHTML = callback(data, versions)
})
}