import { ASSESSORES, obterAssessorPorFila } from './assessores.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Menu Mobile Toggle
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mainNav = document.getElementById('mainNav');

  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      mainNav.classList.toggle('mobile-active');
      const isExpanded = mainNav.classList.contains('mobile-active');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
    });
  }

  // 2. Abas da Seção Conquistas e Projetos Aprovados
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-tab');
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      tabPanels.forEach(panel => {
        if (panel.id === targetId) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });

  // 3. Sistema de Triagem por Assessor (Funil do Gabinete)
  const categoryChips = document.querySelectorAll('.gabinete-category-chip');
  const handoffPanel = document.getElementById('assessorHandoffPanel');
  const avatarEl = document.getElementById('assessorAvatar');
  const nomeEl = document.getElementById('assessorNome');
  const cargoEl = document.getElementById('assessorCargo');
  const mensagemEl = document.getElementById('assessorMensagem');
  const protocoloEl = document.getElementById('protocoloDisplay');
  const handoffForm = document.getElementById('formHandoffGabinete');

  let categoriaSelecionada = 'Infraestrutura';
  let assessorAtual = null;
  let protocoloGerado = '';

  categoryChips.forEach(chip => {
    chip.addEventListener('click', () => {
      categoryChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      categoriaSelecionada = chip.getAttribute('data-fila');
      assessorAtual = obterAssessorPorFila(categoriaSelecionada);

      // Gera Protocolo no formato oficial do gabinete: #VR-2026-XXXX
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      protocoloGerado = `#VR-2026-${randomNum}`;

      // Atualiza os dados dinâmicos do assessor responsável
      if (avatarEl) avatarEl.src = assessorAtual.avatar;
      if (nomeEl) nomeEl.textContent = assessorAtual.nome;
      if (cargoEl) cargoEl.textContent = assessorAtual.cargo;
      if (mensagemEl) mensagemEl.textContent = assessorAtual.mensagem;
      if (protocoloEl) protocoloEl.textContent = protocoloGerado;

      // Exibe suavemente o painel de transbordo
      if (handoffPanel) {
        handoffPanel.classList.add('visible');
        handoffPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  });

  // 4. Envio Formatado para o WhatsApp com Protocolo e Assessor
  if (handoffForm) {
    handoffForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nome = document.getElementById('cidadaoNome').value.trim();
      const bairro = document.getElementById('cidadaoBairro').value.trim();
      const telefone = document.getElementById('cidadaoTelefone').value.trim();

      const mensagemWhatsApp = `Olá, meu nome é *${nome}* (Bairro: *${bairro}*).\n` +
        `Estou entrando em contato através do portal do Vereador Rinaldo com o protocolo oficial *${protocoloGerado}*.\n` +
        `*Assunto:* ${categoriaSelecionada}\n` +
        `*Assessor Responsável:* ${assessorAtual ? assessorAtual.nome : 'Assessoria'}\n` +
        `Gostaria de formalizar essa demanda com o gabinete.`;

      // Linha única oficial do gabinete (configurável)
      const numeroWhatsAppGabinete = '5517997812200';
      const url = `https://wa.me/${numeroWhatsAppGabinete}?text=${encodeURIComponent(mensagemWhatsApp)}`;

      window.open(url, '_blank');
    });
  }

  // 5. Header Sticky com Detecção de Rolagem
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.style.boxShadow = '0 4px 20px rgba(9, 45, 173, 0.08)';
      header.style.height = '80px';
    } else {
      header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
      header.style.height = '88px';
    }
  });
});
