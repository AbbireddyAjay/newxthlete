// Blog data
const blogs = [
    {
        title: "The Rise of a Sprinter",
        excerpt: "Follow the incredible journey of Maya Chen as she breaks barriers and sets new records in the 100m sprint.",
        date: "January 28, 2025",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        content: `
            <p>Maya Chen's story is one of determination, discipline, and unwavering focus. Starting her athletic journey at just 12 years old, she faced numerous challenges that would have deterred many aspiring athletes.</p>
            
            <p>Born in a small town with limited resources, Maya's talent was first noticed during a school sports day. Her natural speed caught the attention of a local coach who saw potential that needed nurturing. Despite financial constraints, her family made sacrifices to support her training.</p>
            
            <p>The early years were tough. Maya would wake up at 5 AM every day to train before school, then return for evening sessions. Her dedication paid off when she won her first regional championship at 16, clocking an impressive 11.8 seconds in the 100m sprint.</p>
            
            <p>College brought new opportunities and challenges. Training with elite athletes pushed Maya to her limits. She refined her technique, improved her mental game, and learned the importance of recovery and nutrition. Her college coach introduced scientific training methods that transformed her performance.</p>
            
            <p>The breakthrough came during the national championships. Maya not only won the 100m but also set a new personal best of 10.95 seconds, qualifying her for international competitions. This moment marked the beginning of her professional career.</p>
            
            <p>Today, Maya continues to inspire young athletes worldwide. Her message is simple: "Talent without hard work is nothing. But hard work without giving up is everything." She now holds three national records and is preparing for the upcoming World Championships.</p>
        `
    },
    {
        title: "Mental Strength in Elite Sports",
        excerpt: "Exploring the psychological aspects that separate good athletes from great champions in high-pressure situations.",
        date: "January 25, 2025",
        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        content: `
            <p>The mind is often called the most powerful muscle in an athlete's body, and for good reason. While physical training gets most of the attention, mental strength is what truly separates elite performers from the rest.</p>
            
            <p>Dr. Sarah Mitchell, our lead sports psychologist, has worked with Olympic medalists and world champions. According to her research, 80% of athletic performance is mental. "The body achieves what the mind believes," she often tells her clients.</p>
            
            <p>Visualization is one of the most powerful tools in an athlete's mental arsenal. Champions spend hours mentally rehearsing their performances, imagining every detail from the starting position to crossing the finish line. This mental practice creates neural pathways that help during actual competition.</p>
            
            <p>Pressure is another crucial factor. Great athletes don't feel less pressure; they handle it better. They learn to reframe nerves as excitement and use adrenaline as fuel rather than letting it overwhelm them. This shift in perspective can make the difference between winning and losing.</p>
            
            <p>Self-talk plays a vital role in maintaining confidence during challenging moments. Positive affirmations and constructive internal dialogue help athletes maintain focus and push through barriers when their bodies want to quit.</p>
            
            <p>The most successful athletes also develop robust coping strategies for setbacks. They view failures as learning opportunities and maintain long-term perspective even when facing immediate disappointments. This resilience is what allows them to bounce back stronger.</p>
            
            <p>Mental training should be as systematic and rigorous as physical training. Regular meditation, mindfulness practices, and working with sports psychologists can dramatically improve performance and career longevity.</p>
        `
    },
    {
        title: "Nutrition for Peak Performance",
        excerpt: "Understanding how proper nutrition can enhance athletic performance and accelerate recovery times.",
        date: "January 22, 2025",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
        content: `
            <p>Nutrition is the fuel that powers athletic excellence. Without proper nutritional strategies, even the most talented athletes will struggle to reach their full potential. Our nutrition team has developed comprehensive guidelines that have helped athletes achieve breakthrough performances.</p>
            
            <p>Macronutrient timing is crucial for optimal performance. Carbohydrates provide the immediate energy needed for high-intensity activities, while proteins are essential for muscle repair and growth. Fats, often overlooked, play a vital role in hormone production and long-term energy storage.</p>
            
            <p>Pre-workout nutrition should focus on easily digestible carbohydrates consumed 1-3 hours before training. This provides glycogen stores without causing digestive discomfort. A banana with a small amount of nut butter is a perfect example of an effective pre-workout snack.</p>
            
            <p>During extended training sessions or competitions lasting more than 90 minutes, athletes need to refuel with 30-60 grams of carbohydrates per hour. Sports drinks, energy gels, or fresh fruit can provide this quick energy source.</p>
            
            <p>Post-workout nutrition is perhaps most critical for recovery. The 30-minute window after exercise is when muscles are most receptive to nutrient uptake. A combination of protein and carbohydrates in a 3:1 or 4:1 ratio helps restore glycogen and initiate muscle repair.</p>
            
            <p>Hydration cannot be overlooked. Even mild dehydration can significantly impact performance. Athletes should monitor their urine color and aim to drink water consistently throughout the day, not just during training.</p>
            
            <p>Micronutrients like iron, B vitamins, and antioxidants play supporting roles in energy metabolism and recovery. A diverse diet rich in colorful fruits and vegetables usually provides adequate micronutrient intake, but some athletes may benefit from targeted supplementation.</p>
        `
    },
    {
        title: "Recovery: The Hidden Performance Factor",
        excerpt: "Why rest and recovery are just as important as training for achieving athletic excellence.",
        date: "January 20, 2025",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        content: `
            <p>In the pursuit of athletic excellence, many athletes focus intensely on training while neglecting recovery. However, it's during rest periods that the body adapts to training stress and becomes stronger. Understanding and implementing proper recovery strategies can be the difference between plateauing and achieving new personal bests.</p>
            
            <p>Sleep is the cornerstone of recovery. During deep sleep, the body releases growth hormone, which is essential for muscle repair and adaptation. Elite athletes should aim for 8-9 hours of quality sleep per night, with consistent sleep and wake times to optimize their circadian rhythm.</p>
            
            <p>Active recovery involves low-intensity activities that promote blood flow without adding training stress. Light swimming, yoga, or easy cycling can help remove metabolic waste products and deliver nutrients to recovering tissues.</p>
            
            <p>Stress management is often overlooked but crucial for recovery. Chronic stress elevates cortisol levels, which can interfere with adaptation and increase injury risk. Meditation, breathing exercises, and maintaining work-life balance are essential for managing stress.</p>
            
            <p>Recovery technologies have advanced significantly. Cold therapy, compression garments, and massage guns can aid recovery, but they should supplement, not replace, fundamental recovery practices like sleep and nutrition.</p>
            
            <p>Periodization involves planned variations in training intensity and volume. Athletes can't maintain peak intensity year-round without burnout or injury. Strategic deload weeks and off-seasons are essential for long-term development.</p>
            
            <p>Listening to your body is perhaps the most important recovery skill. Athletes must learn to distinguish between normal training fatigue and early signs of overtraining. Heart rate variability, mood changes, and performance metrics can all provide valuable feedback about recovery status.</p>
        `
    },
    {
        title: "Technology in Modern Athletics",
        excerpt: "How cutting-edge technology is revolutionizing training methods and performance analysis in sports.",
        date: "January 18, 2025",
        image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        content: `
            <p>Technology has transformed athletics in ways that seemed impossible just a decade ago. From wearable devices that monitor every heartbeat to AI-powered video analysis that breaks down technique frame by frame, modern athletes have access to unprecedented amounts of data about their performance.</p>
            
            <p>Wearable technology has become ubiquitous in elite sports. GPS watches track distance, pace, and route data for endurance athletes. Heart rate monitors provide real-time feedback about training intensity. Advanced devices can even measure lactate levels non-invasively, helping athletes train in optimal zones.</p>
            
            <p>Video analysis software allows coaches to examine technique with microscopic detail. High-speed cameras capture movements invisible to the naked eye, while motion tracking systems provide 3D analysis of body mechanics. This technology helps identify inefficiencies and injury risk factors.</p>
            
            <p>Data analytics platforms aggregate information from multiple sources to provide comprehensive performance insights. Machine learning algorithms can identify patterns and predict optimal training loads, helping prevent overtraining and maximize adaptation.</p>
            
            <p>Virtual reality is emerging as a powerful training tool. Athletes can practice in simulated environments, replay crucial moments from competitions, or train their minds to handle high-pressure situations without physical stress.</p>
            
            <p>Recovery monitoring has become more sophisticated with devices that track sleep quality, stress levels, and readiness for training. This objective data helps athletes and coaches make informed decisions about when to push hard and when to focus on recovery.</p>
            
            <p>However, technology should enhance, not replace, fundamental coaching principles. The human element of motivation, strategy, and emotional support remains irreplaceable. The most successful programs combine cutting-edge technology with experienced coaching wisdom.</p>
        `
    }
];

// Generate blog cards
function generateBlogCards() {
    const blogGrid = document.getElementById('blog-grid');
    blogs.forEach((blog, index) => {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card';
        blogCard.innerHTML = `
            <img src="${blog.image}" alt="${blog.title}" class="blog-image">
            <div class="blog-content">
                <h3>${blog.title}</h3>
                <p>${blog.excerpt}</p>
                <div class="blog-date">${blog.date}</div>
            </div>
        `;
        blogCard.addEventListener('click', () => openBlogModal(index));
        blogGrid.appendChild(blogCard);
    });
}

// Open blog modal
function openBlogModal(index) {
    const modal = document.getElementById('blog-modal');
    const blog = blogs[index];
    
    document.getElementById('modal-title').textContent = blog.title;
    document.getElementById('modal-date').textContent = blog.date;
    document.getElementById('modal-image').src = blog.image;
    document.getElementById('modal-image').alt = blog.title;
    document.getElementById('modal-content-text').innerHTML = blog.content;
    document.getElementById('modal-bottom-image').src = blog.image;
    document.getElementById('modal-bottom-image').alt = blog.title;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close blog modal
function closeBlogModal() {
    const modal = document.getElementById('blog-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Mobile menu toggle
function toggleMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    const hamburger = document.getElementById('hamburger');
    
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Smooth scrolling for navigation links
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Navbar scroll effect
function handleNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Generate blog cards
    generateBlogCards();
    
    // Mobile menu toggle
    document.getElementById('hamburger').addEventListener('click', toggleMobileMenu);
    
    // Close modal events
    document.querySelector('.close').addEventListener('click', closeBlogModal);
    document.getElementById('blog-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeBlogModal();
        }
    });
    
    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeBlogModal();
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            smoothScroll(target);
            
            // Close mobile menu if open
            document.getElementById('nav-menu').classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.blog-card, .team-member, .achievement-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Counter animation for achievements
function animateCounters() {
    const counters = document.querySelectorAll('.achievement-number');
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace('+', ''));
        const increment = target / 50;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = counter.textContent.includes('+') ? target + '+' : target;
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current);
            }
        }, 30);
    });
}

// Trigger counter animation when achievements section is visible
const achievementsSection = document.getElementById('achievements');
const achievementsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            achievementsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (achievementsSection) {
    achievementsObserver.observe(achievementsSection);
}
const blogs = [
    {
      title: "India vs England Test - Day 1 Recap",
      content: "India dominated with the bat as Rohit Sharma scored a century and Bumrah picked early wickets...",
    },
    {
      title: "Shubman Gill’s Comeback",
      content: "After facing criticism, Gill answered with a steady 85-run innings showing maturity and grit...",
    }
  ];
  
  function loadBlogs() {
    const blogList = document.getElementById("blog-list");
    blogs.forEach((blog, index) => {
      const card = document.createElement("div");
      card.className = "blog-card";
      card.innerText = blog.title;
      card.onclick = () => openModal(blog.title, blog.content);
      blogList.appendChild(card);
    });
  }
  
  function openModal(title, content) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-content").innerText = content;
    document.getElementById("blog-modal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("blog-modal").style.display = "none";
  }
  
  window.onload = loadBlogs;
  
