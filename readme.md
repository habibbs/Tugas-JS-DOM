# Tugas JS DOM

## SECTION 2

### ==== getElementsByClassName ====

   #### pada html
      <h1 class="title">Tugas JS DOM</h1>
   #### pada javascript    
      const klass = document.getElementsByClassName('title');
         console.log(klass);

### ==== getElementsByTagName ====
   #### pada html
      <h3>Document Object Model</h3>
   #### pada javascript
      const Tag = document.getElementsByTagName('h3');
         console.log(Tag);
   
### ==== getElementById ====
   #### pada html
      <p id="tagline" class="tag">JavaScript Pancen Oye</p>
   #### pada javascript
      const id = document.getElementById('tagline');
         console.log(id);


## SECTION 3

### ==== parentNode ====
   #### pada html
         <header>
            <h1 class="title">Tugas JS DOM</h1>
            <h3>Document Object Model</h3>
            <p id="tagline" class="tag">JavaScript Pancen Oye</p>
         </header>

   #### pada javascript
      let paren = document.querySelector('.title') //parentNode
         console.log(paren.parentNode);

### ==== firstElementChild ====
   #### pada html
         <ul id="list">
            <li class="list-1">test1</li>
            <li class="list-2">test2</li>
            <li class="list-3" id="urutanke-3">test3</li>
            <li>test4</li>
         </ul>
   #### pada javascript
         let parenn = document.getElementById('list'); //firstElementChild
            console.log(parenn.firstElementChild);

### ==== nextElementSibling ====
   #### pada html
         <ul id="list">
            <li class="list-1">test1</li>
            <li class="list-2">test2</li>
            <li class="list-3" id="urutanke-3">test3</li>
            <li>test4</li>
         </ul>
   #### pada javascript
      let sibling = document.querySelector('.list-1') //nextElementSibling
         console.log(sibling.nextElementSibling);


## SECTION 4
   ### ==== createElement ====
      let span = document.createElement('span'); //createElement
   ### ==== InnerHTML ====
      span.innerHTML = '<span>Menambah Element</span>';  //InnerHTML
   ### ==== appendChild ====
      document.body.appendChild(span); //appendChild


## SECTION 5
### ==== setAttribute ====
   #### pada html
      <ul id="list">
         <li class="list-1">test1</li>
         <li class="list-2">test2</li>
         <li class="list-3" id="urutanke-3">test3</li>
         <li>test4</li>
      </ul>
   #### pada javascript
      const lis = document.getElementsByTagName('li'); //SetAttribute
         lis[3].setAttribute('class', 'list-4');

### ==== getAttribut ====
   #### pada html
      <ul id="list">
         <li class="list-1">test1</li>
         <li class="list-2">test2</li>
         <li class="list-3" id="urutanke-3">test3</li>
         <li>test4</li>
      </ul>
   #### pada javascript
      let liss = document.querySelector('.list-3'); //getAttribute
         let idd = liss.getAttribute('id');
         console.log(idd);


## SECTION 6
### ==== Style Properti ====
   #### pada html
      <h1 class="title">Tugas JS DOM</h1>
   #### pada javascript   
      let stylee = document.querySelector('.title');  //Style Properti
         stylee.style.color = 'blue';

### ==== className ====
   #### pada html
      <p id="tagline" class="tag">JavaScript Pancen Oye</p>
   #### pada javascript
      let idd2 = document.querySelector('#tagline'); //className
         console.log(idd2.className);


## SECTION 7
### ==== javaScript Events ====
   #### pada html
      <button class="welcome">Welcome!</button>
      <button class="end">End</button>
   #### pada javascript
      let welcome = document.querySelector('.welcome');
         welcome.addEventListener('click', function() {
            alert('Welcome to MyWebsite');
         })

      let end = document.querySelector('.end');
         end.addEventListener('click', function(){
            confirm('Apakah anda akan meninggalkan web ini ? ')
         })

### ==== HTML event handler attributes ====
   #### pada html
      <button class="simpan" onclick="simpan()">Save</button>
      <button class="delete" onclick="hapus()">Delete</button>
   #### pada javascript
      function simpan() {
         alert('Data anda berhasil Disimpan');
      }

      function hapus() {
         confirm('Apakah anda ingin menghapus data ini ?')
      }


## SECTION 8
### ==== JavaScript Checkbox ====
   #### pada html
      <label for="pilihan">pilih lokasi wisata</label><br>
         <input type="checkbox" name="solo" id="solo" value="Solo">Solo
         <br>
         <button id="accept">Confirm</button>

      <label for="Hobi">Pilih Hobi anda :</label><br>
         <input type="checkbox" name="hobi" id="bola" value="Sepak Bola">Sepak Bola <br>
         <input type="checkbox" name="hobi" id="badminton" value="Badminton">Badminton <br>
            <button id="set">Kirim</button>
   #### pada javascript
      const wisata = document.querySelector('#solo');
      const btn = document.querySelector('#accept');
         btn.onclick = () => {
            alert(wisata.value);
         };

      const button = document.querySelector('#set');
      button.addEventListener('click', (event) => {
         let Check= document.querySelectorAll('input[name="hobi"]:checked');
         let values = [];
         Check.forEach((checkbox) => {
            values.push(checkbox.value);
         });
         alert(values);
      })

### ==== JavaScript Radio Button ====
   #### pada html
      <label for="gender">Jenis Kelamin</label><br>
         <input type="radio" name="gender" id="laki" value="Laki-laki">Laki-laki <br>
         <input type="radio" name="gender" id="wanita" value="Perempuan">Perempuan <br>
            <button id="pilih">Pilih !</button>
               <p id="genderr"></p>
   #### pada javascript
      const buttonPlh = document.querySelector('#pilih');
      const radio = document.querySelectorAll('input[name="gender"]');
      buttonPlh.addEventListener('click', (event) => {
         let pilihan;
         for(const radioButton of radio) {
            if (radioButton.checked) {
               pilihan = radioButton.value;
               break;
            }
         }
         let output = document.querySelector('#genderr');
            output.innerText=`Gender anda adalah ${pilihan}`;
      })