const CONFIG = {
  autor: "kayky Rugani",
  cliente: "Dr. Fernando Flauzino",
  cro: "167296",
  data: "08/10/2026",
  valor: "R$ 600,00",
  pagamento: "[definir forma de pagamento]",
  chavePix: "[definir chave Pix]",
  whatsapp: "16988278840"
};

// Conteúdo editável da apresentação. Os elementos seguem os do pedido original.
const slides = [
  { label: "PROPOSTA", title: "Base Digital", theme: "dark cover", body: `<p class="subtitle">Presença digital para ${CONFIG.cliente}</p><p class="cover-detail">Cirurgião-Dentista · CRO ${CONFIG.cro} · Prótese e Implantes · Atibaia-SP</p><p class="cover-byline">Preparada por <strong>${CONFIG.autor}</strong> · ${CONFIG.data}</p>` },
  { label: "OBJETIVO", title: "Uma base para a sua presença digital crescer", body: `<p class="lead">Criar a base digital do Dr. Fernando como especialista em <strong>prótese dentária e prótese sobre implante</strong> em Atibaia: identidade visual própria, site institucional e materiais prontos para o Instagram. Tudo pensado para crescer junto com a carreira, inclusive quando houver consultório próprio.</p>` },
  { label: "O COMBO", title: "Tudo o que está incluído", body: `<div class="combo-grid">${[
    ["Identidade visual", "logotipo, cores, tipografia e manual de marca"],
    ["Site institucional", "responsivo, com WhatsApp e perguntas frequentes"],
    ["Instagram", "10 posts, capas de destaques, foto de perfil e bio, templates"],
    ["4 vídeos editados", "Reels e Stories verticais"],
    ["Cartão de visita digital", "pronto para WhatsApp e impressão"]
  ].map(([h,t],i)=>`<article class="combo-card"><span class="number">0${i+1}</span><h3>${h}</h3><p>${t}</p></article>`).join("")}</div>` },
  { label: "IDENTIDADE VISUAL", title: "Uma marca com cara de especialista", body: `<div class="split"><ul class="feature-list"><li><strong>Logotipo</strong> com versão principal, horizontal, monograma e versão para fundo escuro</li><li><strong>Paleta de cores e tipografia</strong> definidas (azul-marinho, marfim e dourado, com Fraunces e Inter)</li><li><strong>Manual de marca resumido (PDF, 1 a 2 páginas)</strong> com cores, fontes, usos corretos e incorretos, e orientações de fotografia</li></ul><aside class="brand-sample"><div class="swatches"><div><i class="swatch navy"></i><span>Azul-marinho<br>#0E1B2C</span></div><div><i class="swatch ivory"></i><span>Marfim<br>#F6F2EA</span></div><div><i class="swatch gold"></i><span>Dourado<br>#B8924A</span></div></div><div class="font-pair"><div><span class="fraunces">Aa</span><small>Fraunces</small></div><div><span class="inter-sample">Aa</span><small>Inter</small></div></div></aside></div>` },
  { label: "SITE INSTITUCIONAL", title: "Um endereço próprio para ser encontrado", body: `<div class="split"><ul class="feature-list"><li>Site responsivo (celular e computador)</li><li>Seções: apresentação, especialidades (prótese e implantes), sobre o profissional, <strong>perguntas frequentes</strong> (protocolo x implante, duração, desvantagens), contato e localização</li><li><strong>Botão de WhatsApp</strong> com mensagem pronta</li><li>Otimização básica para o Google (títulos, descrições e estrutura)</li><li><strong>1 ano de hospedagem e 1 ano de domínio grátis</strong></li></ul><div class="site-preview" aria-label="Prévia ilustrativa do site"><div class="preview-browser"><i></i><i></i><i></i></div><div class="preview-content"><span class="preview-mark">FF</span><div class="preview-line long"></div><div class="preview-line"></div><div class="preview-button"></div></div><span class="preview-caption">Prévia do site</span></div></div>` },
  { label: "INSTAGRAM", title: "Um perfil com identidade e padrão", body: `<div class="split"><ul class="feature-list"><li><strong>10 posts</strong> (feed e stories) seguindo a identidade visual</li><li><strong>5 a 6 capas de destaques</strong> (Sobre mim, Prótese Protocolo, Implantes, Dúvidas, Agendar, entre outras)</li><li><strong>Foto de perfil e bio otimizada</strong>, com link para o site</li><li><strong>2 a 3 templates editáveis no Canva</strong> (post e story), para manter o padrão com autonomia</li></ul><div class="highlight-grid">${["Sobre mim","Protocolo","Implantes","Dúvidas","Agendar","Antes e depois"].map((n,i)=>`<div class="highlight"><span class="highlight-icon">${["✳","◉","◇","?","↗","✧"][i]}</span><small>${n}</small></div>`).join("")}</div></div>` },
  { label: "VÍDEOS", title: "4 vídeos editados para o Instagram", body: `<p class="lead compact">Vídeos verticais (Reels e Stories) de 30 a 60 segundos, editados com corte, legendas, trilha, identidade visual e capa. Inclui roteiro curto e mini-guia de gravação (luz, áudio e enquadramento).</p><div class="video-grid">${["Quem é o Dr. Fernando e com o que trabalha","Protocolo x implante: qual a diferença?","Quanto tempo dura uma prótese?","Mito ou verdade sobre prótese e implante"].map((x,i)=>`<article class="topic-card"><span class="number">0${i+1}</span><p>${x}</p></article>`).join("")}</div>` },
  { label: "EXTRA", title: "Cartão de visita digital", body: `<div class="split extra-layout"><p class="lead compact">Arte pronta em PNG e PDF, para enviar pelo WhatsApp e imprimir quando quiser.</p><div class="business-card"><span class="monogram">FF</span><div class="business-rule"></div><strong>${CONFIG.cliente}</strong><small>Cirurgião-Dentista · Prótese e Implantes</small></div></div>` },
  { label: "COMO FUNCIONA", title: "Etapas e combinados", body: `<div class="split steps-split"><section><h3 class="section-heading">Etapas</h3><ol class="steps-list"><li>Alinhamento inicial e envio de informações (textos, fotos, CRO, contatos)</li><li>Criação do logotipo e da identidade visual, com aprovação</li><li>Desenvolvimento do site e das peças do Instagram</li><li>Gravação dos vídeos pelo Dr. Fernando, seguindo o roteiro, e edição</li><li>Entrega final e orientação de uso</li></ol></section><section><h3 class="section-heading">Combinados</h3><ul class="feature-list"><li>O cliente fornece as informações e fotos necessárias</li><li>O Dr. Fernando <strong>grava os vídeos</strong> (celular na vertical, boa luz e áudio limpo) e envia os arquivos</li><li>Até <strong>2 rodadas de ajustes</strong> no logotipo, site e posts, e <strong>1 rodada por vídeo</strong></li><li>O conteúdo técnico e a conformidade com as normas do CFO são de responsabilidade do profissional</li></ul></section></div>` },
  { label: "INVESTIMENTO", title: "Valor total", theme: "dark investment", body: `<div class="investment"><strong class="price">${CONFIG.valor}</strong><p>Inclui <strong>1 ano de hospedagem e 1 ano de domínio grátis</strong></p><p class="payment-line">Pagamento: ${CONFIG.pagamento}</p><p class="payment-line">Chave Pix: ${CONFIG.chavePix}</p></div>` },
  { label: "PROPRIEDADE E USO", title: "Tudo o que for criado é seu", body: `<p class="lead">Após o pagamento integral, todos os arquivos finais (logotipo, artes, site e vídeos editados) passam a ser do Dr. Fernando, que receberá os arquivos em formatos editáveis e prontos para uso. kayky Rugani poderá citar o projeto em seu portfólio, salvo se o cliente não autorizar.</p>` },
  { label: "ACEITE", title: "Vamos começar?", body: `<p class="lead">Ao aprovar esta proposta, o projeto é iniciado com o envio do material inicial.</p><div class="acceptance"><p>Aprovado por: ____________________ <span>Data: ___/___/______</span></p><div class="accept-actions"><a class="action-button whatsapp-link" href="https://wa.me/55${CONFIG.whatsapp}">Aprovar pelo WhatsApp</a><button class="action-button print-button" type="button" onclick="window.print()">Imprimir / salvar PDF</button></div></div>` }
];

const presentation = document.querySelector("#presentation");
const progressBar = document.querySelector("#progressBar");
const counter = document.querySelector("#counter");
let current = 0;

function render() {
  presentation.innerHTML = slides.map((slide, index) => `<section class="slide ${slide.theme || ""}" data-slide="${index}" aria-hidden="${index !== current}" ${index === current ? "" : "inert"}><div class="slide-inner"><header class="slide-heading"><p class="eyebrow">${slide.label}</p><h1>${slide.title}</h1><span class="gold-rule"></span></header><div class="slide-body">${slide.body}</div></div></section>`).join("");
  showSlide(current, false);
}

function showSlide(index, updateHash = true) {
  current = Math.max(0, Math.min(index, slides.length - 1));
  document.querySelectorAll(".slide").forEach((slide, i) => {
    const active = i === current;
    slide.classList.toggle("is-active", active);
    slide.setAttribute("aria-hidden", String(!active));
    if (active) slide.removeAttribute("inert"); else slide.setAttribute("inert", "");
  });
  counter.textContent = `${String(current + 1).padStart(2,"0")} / ${String(slides.length).padStart(2,"0")}`;
  progressBar.style.width = `${((current + 1) / slides.length) * 100}%`;
  if (updateHash && location.hash !== `#${current + 1}`) history.replaceState(null, "", `#${current + 1}`);
}

function fromHash() {
  const number = Number(location.hash.slice(1));
  if (Number.isInteger(number) && number >= 1 && number <= slides.length) showSlide(number - 1, false);
}

document.querySelector("#previous").addEventListener("click", () => showSlide(current - 1));
document.querySelector("#next").addEventListener("click", () => showSlide(current + 1));
document.querySelector("#fullscreen").addEventListener("click", async () => {
  try { if (!document.fullscreenElement) await document.documentElement.requestFullscreen(); else await document.exitFullscreen(); } catch { /* Tela cheia pode não estar disponível no navegador. */ }
});
document.addEventListener("keydown", event => {
  if (["ArrowRight", " "].includes(event.key)) { event.preventDefault(); showSlide(current + 1); }
  else if (event.key === "ArrowLeft") { event.preventDefault(); showSlide(current - 1); }
  else if (event.key === "Home") showSlide(0);
  else if (event.key === "End") showSlide(slides.length - 1);
});
window.addEventListener("hashchange", fromHash);

let touchStartX = 0;
presentation.addEventListener("touchstart", event => { touchStartX = event.changedTouches[0].screenX; }, { passive: true });
presentation.addEventListener("touchend", event => {
  const deltaX = event.changedTouches[0].screenX - touchStartX;
  if (Math.abs(deltaX) > 55) showSlide(current + (deltaX < 0 ? 1 : -1));
}, { passive: true });

render();
fromHash();
