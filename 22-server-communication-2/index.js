function addCharacter(character) {
  const characterList = document.querySelector("#character-list");
  const div = makeCharacterCard(character);
  characterList.appendChild(div);
}

function makeCharacterCard(character) {
  const div = document.createElement("div");
  div.className = "card";

  const h3 = document.createElement("h3");
  h3.textContent = character.name;

  const p = document.createElement("p");
  p.textContent = character.culture;

  //add all elements to div
  div.appendChild(h3);
  div.appendChild(p);

  return div;
}

function showCharacters(characterArray) {
  const characterList = document.querySelector("#character-list");
  characterList.innerText = ''
  characterArray.map(character => {
    addCharacter(character);
  });
}

// what happens when books isn't defined?
// showBooks(books);

getHouse()
  .then(house => {
    console.log(house)
    Promise.all(
      house.swornMembers.map(memberUrl => {
        return getDataAtUrl(memberUrl)
      })
    ).then(characters => {
      showCharacters(characters)
    })
    // house.swornMembers.forEach(memberUrl => {
    //   getDataAtUrl(memberUrl)
    //     .then(memberData => {
    //       console.log(memberData)
    //       addCharacter(memberData)
    //     })
    // })
  })
