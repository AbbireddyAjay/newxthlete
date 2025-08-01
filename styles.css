* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #000000;
    color: #ffffff;
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
}

/* Navigation */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(10px);
    z-index: 1000;
    padding: 1rem 0;
    transition: all 0.3s ease;
}

.navbar.scrolled {
    background-color: rgba(0, 0, 0, 0.98);
    box-shadow: 0 2px 20px rgba(255, 255, 255, 0.1);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
}

.logo {
    font-size: 2rem;
    font-weight: 700;
    color: #ffffff;
    text-decoration: none;
    letter-spacing: -1px;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-item a {
    color: #ffffff;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    position: relative;
    padding: 0.5rem 0;
}

.nav-item a:hover {
    color: #00d4ff;
}

.nav-item a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #00d4ff, #0099cc);
    transition: width 0.3s ease;
}

.nav-item a:hover::after {
    width: 100%;
}

.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.hamburger span {
    width: 25px;
    height: 3px;
    background: #ffffff;
    margin: 3px 0;
    transition: 0.3s;
}

/* Hero Section */
.hero {
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
                url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80') center/cover;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
}

.hero-content {
    max-width: 800px;
    padding: 0 2rem;
    animation: fadeInUp 1s ease-out;
}

.hero h1 {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #ffffff, #00d4ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero p {
    font-size: 1.5rem;
    font-weight: 300;
    opacity: 0.9;
    margin-bottom: 2rem;
}

.cta-button {
    display: inline-block;
    padding: 1rem 2rem;
    background: linear-gradient(135deg, #00d4ff, #0099cc);
    color: #ffffff;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
    transition: all 0.3s ease;
    transform: translateY(0);
}

.cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
}

/* Section Styles */
.section {
    padding: 5rem 0;
    max-width: 1200px;
    margin: 0 auto;
    padding-left: 2rem;
    padding-right: 2rem;
}

.section-title {
    font-size: 3rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #00d4ff, #0099cc);
    border-radius: 2px;
}

/* Blog Section */
.blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.blog-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    overflow: hidden;
    transition: all 0.3s ease;
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
}

.blog-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.blog-content {
    padding: 2rem;
}

.blog-card:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 20px 40px rgba(0, 212, 255, 0.1);
}

.blog-card:hover .blog-image {
    transform: scale(1.05);
}

.blog-card h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #00d4ff;
}

.blog-card p {
    opacity: 0.8;
    line-height: 1.6;
}

.blog-date {
    color: #00d4ff;
    font-size: 0.9rem;
    margin-top: 1rem;
    opacity: 0.7;
}

/* Team Section */
.team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.team-member {
    text-align: center;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.team-member:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.1);
}

.team-photo {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: 0 auto 1rem;
    background: linear-gradient(135deg, #00d4ff, #0099cc);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    color: #000;
    font-weight: 700;
    overflow: hidden;
    position: relative;
}

.team-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}

.team-photo-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    color: #000;
    font-weight: 700;
}

.team-member h3 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.team-member p {
    color: #00d4ff;
    opacity: 0.8;
}

/* Achievements Section */
.achievements {
    background: rgba(255, 255, 255, 0.02);
    border-radius: 20px;
    padding: 3rem 2rem;
    margin: 2rem 0;
}

.achievements-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.achievement-item {
    text-align: center;
    padding: 2rem 1rem;
}

.achievement-icon {
    font-size: 3rem;
    color: #00d4ff;
    margin-bottom: 1rem;
}

.achievement-number {
    font-size: 3rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 0.5rem;
}

.achievement-text {
    font-size: 1.1rem;
    opacity: 0.8;
}

/* Footer */
.footer {
    background: #111111;
    padding: 3rem 0 1rem;
    margin-top: 5rem;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.footer-section h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #00d4ff;
}

.footer-section p, .footer-section a {
    color: #ffffff;
    opacity: 0.8;
    text-decoration: none;
    line-height: 1.8;
}

.footer-section a:hover {
    color: #00d4ff;
    opacity: 1;
}

.social-icons {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}

.social-icons a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: rgba(0, 212, 255, 0.1);
    border-radius: 50%;
    color: #00d4ff;
    transition: all 0.3s ease;
}

.social-icons a:hover {
    background: #00d4ff;
    color: #000000;
    transform: translateY(-3px);
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: 2rem;
    opacity: 0.6;
}

/* Modal */
.modal {
    display: none;
    position: fixed;
    z-index: 2000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(5px);
}

.modal-content {
    background-color: #111111;
    margin: 5% auto;
    padding: 0;
    border-radius: 15px;
    width: 90%;
    max-width: 900px;
    max-height: 85vh;
    overflow-y: auto;
    position: relative;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.modal-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 15px 15px 0 0;
}

.modal-body {
    padding: 3rem;
}

.close {
    position: absolute;
    right: 2rem;
    top: 2rem;
    color: #ffffff;
    font-size: 2rem;
    cursor: pointer;
    transition: color 0.3s ease;
    z-index: 10;
    background: rgba(0, 0, 0, 0.7);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.close:hover {
    color: #00d4ff;
}

.modal h2 {
    color: #00d4ff;
    margin-bottom: 1rem;
    font-size: 2.5rem;
    line-height: 1.2;
}

.modal-date {
    color: #00d4ff;
    opacity: 0.7;
    margin-bottom: 2rem;
    font-size: 1rem;
}

.modal-content-text {
    line-height: 1.8;
    font-size: 1.1rem;
}

.modal-content-text p {
    margin-bottom: 1.5rem;
}

.modal-content-text p:last-child {
    margin-bottom: 0;
}

.modal-bottom-image {
    width: 100%;
    height: auto;
    margin-top: 2rem;
    border-radius: 10px;
}


/* Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Enhanced Responsive Design */
@media (max-width: 1024px) {
    .hero h1 {
        font-size: 3rem;
    }
    
    .hero p {
        font-size: 1.3rem;
    }
    
    .blog-grid {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    }
    
    .team-grid {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
}

@media (max-width: 768px) {
    .hamburger {
        display: flex;
    }

    .nav-menu {
        position: fixed;
        left: -100%;
        top: 70px;
        flex-direction: column;
        background-color: rgba(0, 0, 0, 0.98);
        backdrop-filter: blur(10px);
        width: 100%;
        text-align: center;
        transition: 0.3s;
        padding: 2rem 0;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }

    .nav-menu.active {
        left: 0;
    }

    .nav-item {
        margin: 1rem 0;
    }

    .hero h1 {
        font-size: 2.5rem;
        line-height: 1.2;
    }

    .hero p {
        font-size: 1.1rem;
    }

    .section-title {
        font-size: 2.2rem;
    }

    .section {
        padding: 3rem 0;
    }

    .blog-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .team-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }

    .achievements-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }

    .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .modal-content {
        width: 95%;
        margin: 2% auto;
        max-height: 90vh;
    }

    .modal-image {
        height: 250px;
    }

    .modal-body {
        padding: 2rem;
    }

    .modal h2 {
        font-size: 2rem;
    }
}

@media (max-width: 480px) {
    .nav-container {
        padding: 0 1rem;
    }

    .logo {
        font-size: 1.5rem;
    }

    .section {
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .hero h1 {
        font-size: 2rem;
        line-height: 1.1;
    }

    .hero p {
        font-size: 1rem;
    }

    .section-title {
        font-size: 1.8rem;
    }

    .team-grid {
        grid-template-columns: 1fr;
    }

    .achievements-grid {
        grid-template-columns: 1fr;
    }

    .achievement-item {
        padding: 1.5rem 1rem;
    }

    .achievement-number {
        font-size: 2.5rem;
    }

    .modal-image {
        height: 200px;
    }

    .modal-body {
        padding: 1.5rem;
    }

    .modal h2 {
        font-size: 1.5rem;
    }

    .modal-content-text {
        font-size: 1rem;
    }
}
#blogs {
    padding: 40px 20px;
    background-color: #111;
    color: white;
    text-align: center;
  }
  
  .blog-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  
  .blog-card {
    background-color: #222;
    padding: 20px;
    border-radius: 10px;
    width: 300px;
    cursor: pointer;
    transition: transform 0.2s ease;
  }
  
  .blog-card:hover {
    transform: scale(1.05);
  }
  
  /* Modal Styling */
  .modal {
    display: none;
    position: fixed;
    z-index: 999;
    padding-top: 60px;
    left: 0; top: 0;
    width: 100%; height: 100%;
    background-color: rgba(0,0,0,0.9);
  }
  
  .modal-content {
    background-color: #fff;
    color: #000;
    margin: auto;
    padding: 20px;
    border-radius: 10px;
    width: 60%;
    max-height: 80vh;
    overflow-y: auto;
  }
  
  .close-button {
    float: right;
    font-size: 24px;
    cursor: pointer;
  }
  
