function toggleMenu() {
    const menu = document.getElementById("dropdown");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function toggleChatbot() {
    const bot = document.getElementById("chatbotBox");
    bot.style.display = bot.style.display === "block" ? "none" : "block";
}

function logout() {
    alert("Logged Out Successfully");
}