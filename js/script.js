// Quando o usuário rola a página, executa a função
const btnTopo = document.getElementById("btnTopo");
window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        btnTopo.classList.add("mostrar");
    } else {
        btnTopo.classList.remove("mostrar");
    }
});
btnTopo.addEventListener("click", () => {
    scrollToTop();
});
function scrollToTop() {
    const scrollDuration = 500; 
    const scrollStep = -window.scrollY / (scrollDuration / 15);
    const scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
}
// Inicializa a galeria de eventos como visível
document.getElementById('galeria-eventos').style.display = 'block';
document.querySelectorAll('input[name="categoria"]').forEach((input) => {
    input.addEventListener('change', () => {
        // Oculta todas as galerias
        document.querySelectorAll('.galeria').forEach((galeria) => {
            galeria.style.display = 'none';
        });
        // Mostra a galeria correspondente
        const selectedGallery = document.querySelector(`#galeria-${input.id}`);
        if (selectedGallery) {
            selectedGallery.style.display = 'block';
        }
    });
});
//criar evento
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const lugar = document.querySelector('input[name="lugar"]:checked');
    if (!lugar) {
      alert('Por favor, selecione um lugar.');
      return;
    }
    const servicosChecked = Array.from(document.querySelectorAll('input[name="servicos"]:checked'));
    if (servicosChecked.length === 0) {
      alert('Por favor, selecione pelo menos um tipo de evento.');
      return;
    }
    const mensagem = document.getElementById('mensagem').value.trim();
    let texto = `Olá! Gostaria de informações sobre o lugar: ${lugar.value}.\n`;
    texto += `Tipo(s) de evento: ${servicosChecked.map(s => s.value).join(', ')}.\n`;
    if(mensagem) {
      texto += `Mensagem adicional: ${mensagem}\n`;
    }
    const textoEncoded = encodeURIComponent(texto);
    const whatsappNumber = '5511981125234';
    const url = `https://wa.me/${whatsappNumber}?text=${textoEncoded}`;
    window.open(url, '_blank');
  });
//abrir os botao
const buttons = document.querySelectorAll('.right-box button');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const faqItem = button.closest('.faq-item');
        const answer = faqItem.querySelector('.answer');
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        if (isExpanded) {
          answer.style.display = 'none';
          button.textContent = '+';
          button.setAttribute('aria-expanded', 'false');
          faqItem.classList.remove('active');
        } else {
          answer.style.display = 'block';
          button.textContent = '−';
          button.setAttribute('aria-expanded', 'true');
          faqItem.classList.add('active');
        }
      });
    });
//rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // evita o salto padrão instantâneo
    const targetId = this.getAttribute('href').substring(1); // tira o '#'
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;
    const startPosition = window.scrollY || window.pageYOffset;
    const targetPosition = targetElement.getBoundingClientRect().top + startPosition;
    const distance = targetPosition - startPosition;
    const duration = 500;  // duração do scroll em ms
    const intervalTime = 15; // intervalo do setInterval
    const steps = duration / intervalTime;
    let stepCount = 0;
    const scrollStep = distance / steps;
    const scrollInterval = setInterval(() => {
      if (stepCount < steps) {
        window.scrollBy(0, scrollStep);
        stepCount++;
      } else {
        clearInterval(scrollInterval);
        window.scrollTo(0, targetPosition);
      }
    }, intervalTime);
  });
});
//link da imagem do botao de criar
document.getElementById('botao-de-criar').addEventListener('click', function(event) {
    event.preventDefault(); // previne o comportamento padrão do link, se houver

    const target = document.getElementById('criar');
    if (!target) return;

    // Pega a posição atual e a posição da section "criar"
    const startPosition = window.scrollY || window.pageYOffset;
    const targetPosition = target.getBoundingClientRect().top + startPosition;
    const distance = targetPosition - startPosition;

    const duration = 500; // duração total do scroll em ms
    const intervalTime = 15; // intervalo do setInterval em ms
    const steps = duration / intervalTime;
    let stepCount = 0;

    const scrollStep = distance / steps;

    const scrollInterval = setInterval(() => {
        if (stepCount < steps) {
            window.scrollBy(0, scrollStep);
            stepCount++;
        } else {
            clearInterval(scrollInterval);
            // Ajusta o scroll final para garantir que ficou exatamente no alvo
            window.scrollTo(0, targetPosition);
        }
    }, intervalTime);
});