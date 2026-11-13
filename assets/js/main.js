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

      // Atualiza botões
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Atualiza painéis
      tabPanels.forEach(panel => {
        if (panel.id === targetId) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });

  // 3. Abas da Seção Agenda
  const agendaButtons = document.querySelectorAll('.agenda-tab-btn');
  const agendaItems = document.querySelectorAll('.agenda-item');

  agendaButtons.forEach(button => {
    button.addEventListener('click', () => {
      agendaButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });

  // 4. Interação nos Cards de Atendimento (Fale com o Gabinete)
  const gabineteCards = document.querySelectorAll('.gabinete-card');
  gabineteCards.forEach(card => {
    card.addEventListener('click', () => {
      const category = card.getAttribute('data-categoria');
      console.log(`Categoria selecionada para atendimento: ${category}`);
      
      // Feedback sutil para o usuário
      const notice = document.querySelector('.gabinete-integration-notice');
      if (notice) {
        notice.style.borderColor = 'var(--color-primary)';
        notice.innerHTML = `<strong>Categoria selecionada: ${category}</strong> — Ponto de integração preparado. Aguardando canal oficial de WhatsApp do gabinete.`;
      }
    });
  });

  // 5. Tratamento Responsável do Formulário de Denúncias
  const denunciaForm = document.getElementById('formDenuncia');
  if (denunciaForm) {
    denunciaForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = denunciaForm.querySelector('button[type="submit"]');
      const feedback = document.getElementById('formFeedback');
      
      if (feedback) {
        feedback.style.display = 'block';
        feedback.innerHTML = `
          <div style="background: #e6f6ee; border: 1px solid #058D55; color: #058D55; padding: 16px; border-radius: 8px; font-size: 14px; margin-top: 20px;">
            <strong>Aviso de Configuração:</strong> Interface validada. Conforme diretriz institucional, o envio real de denúncias será habilitado após a vinculação do backend seguro e credenciais oficiais.
          </div>
        `;
      }
    });
  }

  // 6. Header Sticky com Detecção de Rolagem
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
