'use strict';

const Phone = {
    init() {
        const tel = `tel:${CONFIG.phoneNumber}`;
        const zalo = `https://zalo.me/${CONFIG.zaloNumber}`;

        document.querySelectorAll('.js-phone-link').forEach(el => {
            el.href = tel;
        });
        document.querySelectorAll('.js-phone-text').forEach(el => {
            el.textContent = CONFIG.phoneDisplay;
        });
        document.querySelectorAll('.js-zalo-link').forEach(el => {
            el.href = zalo;
        });
    },
};

const Header = {
    header: null,

    init() {
        this.header = document.getElementById('header');
        if (!this.header) return;

        this.onScroll();
        window.addEventListener('scroll', () => this.onScroll(), { passive: true });
    },

    onScroll() {
        this.header.classList.toggle('header--scrolled', window.scrollY > 20);
    },
};

const MobileMenu = {
    menu: null,
    hamburger: null,
    overlay: null,
    isOpen: false,

    init() {
        this.menu = document.getElementById('mobile-menu');
        this.hamburger = document.querySelector('.header__hamburger');
        this.overlay = document.querySelector('.overlay');

        if (!this.menu || !this.hamburger) return;

        // Mở menu khi bấm hamburger
        this.hamburger.addEventListener('click', () => this.toggle());

        // Đóng menu khi bấm nút X bên trong
        const closeBtn = this.menu.querySelector('.mobile-menu__close');
        closeBtn?.addEventListener('click', () => this.close());

        // Đóng menu khi bấm overlay
        this.overlay?.addEventListener('click', () => this.close());

        // Đóng menu khi bấm vào link
        this.menu.addEventListener('click', e => {
            if (e.target.closest('a')) this.close();
        });

        // Đóng menu khi bấm phím Escape
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape' && this.isOpen) this.close();
        });
    },

    open() {
        this.menu.classList.add('mobile-menu--open');
        this.overlay?.classList.add('overlay--active');
        this.hamburger.setAttribute('aria-expanded', 'true');
        this.isOpen = true;
        document.body.style.overflow = 'hidden';
    },

    close() {
        this.menu.classList.remove('mobile-menu--open');
        this.overlay?.classList.remove('overlay--active');
        this.hamburger.setAttribute('aria-expanded', 'false');
        this.isOpen = false;
        document.body.style.overflow = '';
    },

    toggle() {
        this.isOpen ? this.close() : this.open();
    },
};

const FadeIn = {
    init() {
        if (!('IntersectionObserver' in window)) {
            document.querySelectorAll('.fade-in').forEach(el => el.classList.add('fade-in--visible'));
            return;
        }

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in--visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 },
        );

        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    },
};

const SmoothScroll = {
    init() {
        document.addEventListener('click', e => {
            const anchor = e.target.closest('a[href^="#"]');
            if (!anchor) return;

            const targetId = anchor.getAttribute('href').slice(1);
            if (!targetId) return;

            const target = document.getElementById(targetId);
            if (!target) return;

            e.preventDefault();
            const top = target.getBoundingClientRect().top + window.scrollY - CONFIG.scrollOffset;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    },
};

const ActiveNavLink = {
    init() {
        const path = window.location.pathname;
        document.querySelectorAll('.header__menu-link').forEach(link => {
            const href = link.getAttribute('href') ?? '';
            if (path.endsWith(href) || (href === '../index.html' && path.endsWith('/'))) {
                link.classList.add('header__menu-link--active');
            }
        });
    },
};

document.addEventListener('DOMContentLoaded', () => {
    Phone.init();
    Header.init();
    MobileMenu.init();
    FadeIn.init();
    SmoothScroll.init();
    ActiveNavLink.init();
});
