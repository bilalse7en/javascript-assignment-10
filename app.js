var chatContainer = document.getElementById("chatContainer");
var chatbotButton = document.getElementById("chatbotButton");

function toggleChat() {
    if (chatContainer.style.display === "none" || chatContainer.style.display === "") {
        chatContainer.style.display = "block";
        chatbotButton.style.display = "none";
        setTimeout(() => {
            chatContainer.style.transform = "translateY(0)";
        }, 10);
    } else {
        chatContainer.style.transform = "translateY(100%)";
        setTimeout(() => {
            chatContainer.style.display = "none";
            chatbotButton.style.display = "flex";
        }, 300);
    }
}

var userMsg = document.getElementById("userMsg");
var botMsg = document.getElementById("botMsg");
var chatMsg = document.getElementById("chatMsg");

function sendMessage(event) {
    if (event.keyCode === 13) {
        var elem = event.target;
        var message = elem.value.trim();
        if (message !== "") {

            chatMsg.innerHTML += `<div class='text-end'><div class="user-message d-inline-block">${message}</div></div>`;
            scrollToBottom();
            if (['hi', 'hey', 'hello', 'hy', 'hie', 'salam', 'assalam-0-alikum', 'assalam o alikum'].indexOf(message.toLowerCase()) !== -1) {
                setTimeout(function () {
                    chatMsg.innerHTML += "<div class='align-items-start d-flex'><img src='./images/chatbot-img.png' width='50px'><div class='bot-message d-inline-block'>Hello</div></div>";
                    scrollToBottom();
                }, 2000);
                setTimeout(function () {
                    chatMsg.innerHTML += "<div class='align-items-start d-flex'><img src='./images/chatbot-img.png' width='50px'><div class='bot-message d-inline-block'>Kese ho</div></div>";
                    scrollToBottom();
                }, 4000);
            } else if (['thek', 'theek', 'thk', 'thik', 'ok', 'okay', 'fit', 'bilkul theek', 'sahi', 'mast', '1 Number', 'Alhamdullilah'].indexOf(message.toLowerCase()) !== -1) {
                setTimeout(function () {
                    chatMsg.innerHTML += "<div class='align-items-start d-flex'><img src='./images/chatbot-img.png' width='50px'><div class='bot-message d-inline-block'>Sounds Good</div></div>";
                    scrollToBottom();
                }, 2000);
                setTimeout(function () {
                    chatMsg.innerHTML += "<div class='align-items-start d-flex'><img src='./images/chatbot-img.png' width='50px'><div class='bot-message d-inline-block'>How may I help you sir</div></div>";
                    scrollToBottom();
                }, 4000);
            } else if (['ap batao', 'ap sunao', 'ap kese ho', 'apna batao'].indexOf(message.toLowerCase()) !== -1) {
                setTimeout(function () {
                    chatMsg.innerHTML += "<div class='align-items-start d-flex'><img src='./images/chatbot-img.png' width='50px'><div class='bot-message d-inline-block'>Alhamdullilah</div></div>";
                    scrollToBottom();
                }, 2000);
            } else if (['courses', 'course', 'it course', 'it courses'].indexOf(message.toLowerCase()) !== -1) {
                  setTimeout(function () {
                      chatMsg.innerHTML += `<div class="container mt-4">
                      <div class="row row-cols-1 row-cols-md-2 g-4">
                          <div class="col-md-6 col-12 px-1">
                              <div class="card card-horizontal">
                                  <div class="text-center"><img src="./images/smit.png" width="100px" class="my-1 card-img-left" alt="Web & App Course"></div>
                                  <div class="card-body p-0 py-0 rounded-3 text-bg-secondary">
                                      <h5 class="card-header mb-2">Web & App Course</h5>
                                      <p class="card-text my-2 px-1">Learn to build websites and mobile applications from scratch.</p>
                                      <div class="card-footer mb-0 my-2">Enroll Now</div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-6 col-12 px-1">
                              <div class="card card-horizontal">
                                  <div class="text-center"><img src="./images/smit.png" width="100px" class="my-1 card-img-left" alt="Web 3.0 Course"></div>
                                  <div class="card-body p-0 py-0 rounded-3 text-bg-dark">
                                      <h5 class="card-header mb-2">Web 3.0 Course</h5>
                                      <p class="card-text my-2 px-1">Dive into the world of decentralized web technologies.</p>
                                      <div class="card-footer mb-0 my-2">Enroll Now</div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-6 col-12 px-1">
                              <div class="card card-horizontal">
                                  <div class="text-center"><img src="./images/smit.png" width="100px" class="my-1 card-img-left" alt="AI Course"></div>
                                  <div class="card-body p-0 py-0 rounded-3 text-bg-dark">
                                      <h5 class="card-header mb-2">AI Course</h5>
                                      <p class="card-text my-2 px-1">Master the fundamentals and advanced concepts of artificial intelligence.</p>
                                      <div class="card-footer mb-0 my-2">Enroll Now</div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-6 col-12 px-1">
                              <div class="card card-horizontal">
                                  <div class="text-center"><img src="./images/smit.png" width="100px" class="my-1 card-img-left" alt="Designing Course"></div>
                                  <div class="card-body p-0 py-0 rounded-3 text-bg-secondary">
                                      <h5 class="card-header mb-2">Designing Course</h5>
                                      <p class="card-text my-2 px-1">Explore design principles and tools to create stunning visuals.</p>
                                      <div class="card-footer mb-0 my-2">Enroll Now</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>`;
                      scrollToBottom();
                  }, 2000);
            } else if (['web & app course','web & app', 'web and app', 'website', '& application', 'and application', 'website & application', 'website and application', 'web app', 'web', 'app'].indexOf(message.toLowerCase()) !== -1) {
                setTimeout(function () {
                    chatMsg.innerHTML += 
                    `<div class='align-items-start d-flex'><img src='./images/chatbot-img.png' width='50px'>
                    <div class='bot-message d-inline-block'>Yes, we offer a Web and App course. Please stay connected with our <a href="https://www.facebook.com/saylani.smit/" class="btn btn-primary">Saylani Facebook page</a> for application details.
                    <p>Modules Offered:</p>
                    <ul>
                    <li>HTML, CSS<br>
                    
                    Learn the foundational languages of web development.
                    Understand how to structure web pages using HTML.
                    Style web pages with CSS to make them visually appealing.
                    
                    <li>JavaScript<br>
                    
                    Get introduced to the programming language that powers interactivity on the web.
                    Learn about variables, functions, loops, and events in JavaScript.
                    Develop dynamic and interactive web pages.</li>
                    
                    <li>Advanced JavaScript, TypeScript, React<br>
                    
                    Dive deeper into JavaScript with advanced concepts and techniques.
                    Explore TypeScript to write safer and more manageable code.
                    Master React, a popular JavaScript library for building user interfaces.</li>
                    </div>`;
                    scrollToBottom();
                }, 2000);
            } else if (['designing course','designing', 'designer', 'ui ux', 'ui', 'ux', 'ui/ux', 'ui / ux'].indexOf(message.toLowerCase()) !== -1) {
                setTimeout(function () {
                    chatMsg.innerHTML += 
                    `<div class='align-items-start d-flex'><img src='./images/chatbot-img.png' width='50px'>
                    <div class='bot-message d-inline-block'>Yes, we offer a comprehensive Web and App course focusing on UI/UX design. Please stay connected with our <a href="https://www.facebook.com/saylani.smit/" class="btn btn-primary">Saylani Facebook page</a> for application details and updates.
                    <p>UI/UX Design Course Modules:</p>
                    <ul>
                    <li>Introduction to UI/UX Design<br>
                    
                    Gain an understanding of the fundamental principles of UI (User Interface) and UX (User Experience) design.
                    Learn about the importance of user-centered design and how it impacts the overall experience of digital products.</li>
                    
                    <li>Design Tools and Techniques<br>
                    
                    Get hands-on experience with popular design tools such as Adobe XD, Figma, and Sketch.
                    Learn how to create wireframes, mockups, and prototypes.
                    Understand the basics of visual design, including typography, color theory, and layout.</li>
                    
                    <li>User Research and Testing<br>
                    
                    Conduct user research to gather insights and understand user needs.
                    Learn various research methods such as surveys, interviews, and usability testing.
                    Analyze research data to inform design decisions and improve user experiences.</li>

                    <li>Advanced UI/UX Design<br>
                    Explore advanced topics in UI/UX design, including responsive design, interaction design, and microinteractions.
                    Learn about accessibility and how to create inclusive designs.
                    Study case studies of successful UI/UX projects to understand best practices and design strategies.</li>
                    </div>`;
                    scrollToBottom();
                }, 2000);    
            } else if (['web 3.0 course','web 3.0', 'web 3.0 course', 'meta verse', 'blockchain'].indexOf(message.toLowerCase()) !== -1) {
                setTimeout(function () {
                    chatMsg.innerHTML += 
                    `<div class='align-items-start d-flex'><img src='./images/chatbot-img.png' width='50px'>
                    <div class='bot-message d-inline-block'>Yes, we offer a comprehensive Web 3.0 course. Please stay connected with our <a href="https://www.facebook.com/saylani.smit/" class="btn btn-primary">Saylani Facebook page</a> for application details and updates.
                    <p>Web 3.0 Course Modules:</p>
                    <ul>
                    <li>Introduction to Web 3.0<br>
                    
                    Understand the evolution from Web 2.0 to Web 3.0.
                    Learn about the key concepts of decentralization, blockchain technology, and the semantic web.
                    Explore the potential impact of Web 3.0 on the internet and various industries.</li>
                    
                    <li>Blockchain Fundamentals<br>
                    
                    Gain a solid foundation in blockchain technology.
                    Learn about how blockchain works, including concepts such as distributed ledgers, consensus mechanisms, and smart contracts.
                    Explore different blockchain platforms like Ethereum, Binance Smart Chain, and others.</li>
                    
                    <li>Cryptocurrencies and Digital Assets<br>
                    Understand the role of cryptocurrencies in the Web 3.0 ecosystem.
                    Learn about major cryptocurrencies such as Bitcoin, Ethereum, and emerging digital assets.
                    Explore the concepts of wallets, transactions, and security.</li>

                    <li>Decentralized Applications (DApps)<br>
                    Get hands-on experience with building decentralized applications.
                    Learn about DApp architecture and how to interact with smart contracts.
                    Explore popular DApp development frameworks and tools.</li>
                    </div>`;
                    scrollToBottom();
                }, 2000);    
            } else if (['ai courses', 'ai course', 'ai', 'artificial intelligence'].indexOf(message.toLowerCase()) !== -1) {
                setTimeout(function () {
                    chatMsg.innerHTML += 
                    `<div class='align-items-start d-flex'><img src='./images/chatbot-img.png' width='50px'>
                    <div class='bot-message d-inline-block'>Yes, we offer a comprehensive Artificial Intelligence (AI) course. Please stay connected with our <a href="https://www.facebook.com/saylani.smit/" class="btn btn-primary">Saylani Facebook page</a> for application details and updates.
                    <p>Artificial Intelligence (AI) Course Modules:</p>
                    <ul>
                    <li>Introduction to Artificial Intelligence<br>
                    
                    Understand the fundamental concepts and history of AI.
                    Learn about the different types of AI: narrow AI, general AI, and superintelligent AI.
                    Explore the ethical considerations and implications of AI.</li>
                    
                    <li>Machine Learning Basics<br>
                    
                    Gain a solid foundation in machine learning (ML), a subset of AI.
                    Learn about supervised, unsupervised, and reinforcement learning.
                    Explore key algorithms such as linear regression, decision trees, and k-means clustering.</li>
                    
                    <li>Deep Learning and Neural Networks<br>
                    Dive into deep learning, a subset of ML.
                    Understand the architecture of neural networks, including feedforward and convolutional neural networks (CNNs).
                    Learn about backpropagation and the optimization of neural networks.</li>

                    <li>Natural Language Processing (NLP)<br>
                    Explore NLP and its applications in AI.
                    Learn about techniques for processing and analyzing human language, such as tokenization, stemming, and lemmatization.
                    Study advanced topics like sentiment analysis, machine translation, and chatbots.</li>
                    </div>`;
                    scrollToBottom();
                }, 2000);    
            } else {
                setTimeout(function () {
                    chatMsg.innerHTML += "<div class='align-items-start d-flex'><img src='./images/chatbot-img.png' width='50px'><div class='bot-message d-inline-block'>Sorry, I don't understand this!</div></div>";
                    scrollToBottom();
                }, 2000);
            }
            elem.value = "";
        }
    }
}

function scrollToBottom() {
    var chatContainer = document.getElementById("chatMsg");
    chatContainer.scrollTop = chatContainer.scrollHeight;
}
