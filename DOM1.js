//SECTION 2
   const klass = document.getElementsByClassName('title'); //berdasarkan class
      console.log(klass);

   const Tag = document.getElementsByTagName('h3'); //berdasarkan tag
      console.log(Tag);
   
   const id = document.getElementById('tagline'); //berdasarkan ID
      console.log(id);

//SECTION 3
   let paren = document.querySelector('.title') //parentNode
      console.log(paren.parentNode);

   let parenn = document.getElementById('list'); //firstElementChild
      console.log(parenn.firstElementChild);

   let sibling = document.querySelector('.list-1') //nextElementSibling
      console.log(sibling.nextElementSibling);

//SECTION 4
   let span = document.createElement('span'); //createElement
      span.innerHTML = '<span>Menambah Element</span>';  //InnerHTML
      document.body.appendChild(span); //appendChild

//SECTION 5
   const lis = document.getElementsByTagName('li'); //SetAttribute
      lis[3].setAttribute('class', 'list-4');

      let liss = document.querySelector('.list-3'); //getAttribute
         let idd = liss.getAttribute('id');
         console.log(idd);

//SECTION 6
   let stylee = document.querySelector('.title');  //Style Properti
      stylee.style.color = 'blue';
   
   let idd2 = document.querySelector('#tagline'); //className
      console.log(idd2.className);


//SECTION 7
   //javaScript Events
   let welcome = document.querySelector('.welcome');
      welcome.addEventListener('click', function() {
         alert('Welcome to MyWebsite');
      })

   let end = document.querySelector('.end');
      end.addEventListener('click', function(){
         confirm('Apakah anda akan meninggalkan web ini ? ')
      })

   //HTML event handler attributes
   function simpan() {
      alert('Data anda berhasil Disimpan');
   }

   function hapus() {
      confirm('Apakah anda ingin menghapus data ini ?')
   }


//SECTION 8
   //JavaScript Checkbox
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

   //JavaScript Radio Button
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

   
