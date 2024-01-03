document.addEventListener("DOMContentLoaded", function () {
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const previewBoxes = document.querySelector(".preview-boxes");

  const totalBoxes = document.querySelectorAll(".box").length;
  const boxWidth = document.querySelector(".box").offsetWidth;
  let currentIndex = 0;

  // Sağa ve sola kaydırma fonksiyonları
  function slide(direction) {
    if (direction === "next") {
      currentIndex = (currentIndex + 1) % totalBoxes;
    } else if (direction === "prev") {
      currentIndex = (currentIndex - 1 + totalBoxes) % totalBoxes;
    }
    sliderWrapper.style.transform = `translateX(-${currentIndex * boxWidth}px)`;
    updatePreview();
  }

  // Önizleme kutularını güncelleme
  function updatePreview() {
    previewBoxes.innerHTML = "";
    for (let i = currentIndex; i < currentIndex + 4; i++) {
      const boxText = document.querySelectorAll(".box")[i % totalBoxes].textContent;
      const previewBox = document.createElement("div");
      previewBox.classList.add("preview-box");
      previewBox.textContent = boxText;
      previewBoxes.appendChild(previewBox);
    }
  }

  // Önceki ve sonraki butonlara tıklama eventleri
  prevButton.addEventListener("click", () => slide("prev"));
  nextButton.addEventListener("click", () => slide("next"));

  // Otomatik ileri doğru kaydırma
  setInterval(() => {
    slide("next");
  }, 3000);

  // Sayfa yüklendiğinde ilk önizleme kutularını oluşturma
  updatePreview();
});



function metniGoster() {
  var kisaMetinParagraflari = document.querySelectorAll(".hideInfo");

  kisaMetinParagraflari.forEach(function(paragraf) {
    if (paragraf.style.display === "none") {
      paragraf.style.display = "block";
    } else {
      paragraf.style.display = "none";
    }
  });
}





document.querySelectorAll(".survey-question").forEach(function (surveyQuestion) {
  surveyQuestion.addEventListener("click", function () {
    surveyQuestion.querySelector(".answer").style.display = "block";
  });
})







document.getElementById('navbar-toggle').addEventListener('click', function() {
  var mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu.style.display === 'flex') {
    mobileMenu.style.display = 'none';
  } else {
    mobileMenu.style.display = 'flex';
  }
});



// Dışarı tıklanınca mobil menüyü kapat
document.addEventListener('click', function(event) {
  var mobileMenu = document.getElementById('mobile-menu');
  var toggleButton = document.getElementById('navbar-toggle');
  
  // Eğer tıklanan element toggle butonu veya mobil menü değilse, mobil menüyü kapat
  if (!toggleButton.contains(event.target) && !mobileMenu.contains(event.target)) {
    mobileMenu.style.display = 'none';
  }
});



