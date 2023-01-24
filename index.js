import './style.css';
const state = {
  a: 'apple',
  b: 'banana',
  c: 'city',
  d: 'dom',
  e: 'end',
  f: 'forEach',
  g: 'gold',
};

const DropDown1 = document.getElementById('first');
const DropDown2 = document.getElementById('second');

for (let value in state) {
  let List1 = document.createElement('option');
  List1.textContent = value;
  List1.value = value;
  DropDown1.append(List1);

  let List2 = document.createElement('option');
  List2.textContent = state[value];
  List2.value = state[value];
  DropDown2.append(List2);
}

DropDown1.addEventListener('change', () => {
  let i = DropDown1.selectedIndex;
  DropDown2.options[i].selected = true;
});

DropDown2.addEventListener('change', () => {
  let i = DropDown2.selectedIndex;
  DropDown1.options[i].selected = true;
});
