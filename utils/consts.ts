export const defaultHTML = `<!DOCTYPE html>
<html>
  <head>
    <title>A-K Project</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charset="utf-8">
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <style>
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        height: 100dvh;
        font-family: "Comic Sans MS", cursive, sans-serif;
        text-align: center;
        background: linear-gradient(-45deg, #e73c7e, rgb(9, 62, 82), #23d5ab);
        background-size: 400% 400%;
        animation: gradient 15s ease infinite;
      }
      @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      h1 {
        font-size: 3rem;
        color: white;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        animation: fadeIn 2s ease-in-out;
      }
      h1 span {
        color: #f0f0f0;
        font-size: 1.5rem;
        display: block;
        margin-bottom: 1rem;
        animation: slideIn 2s ease-in-out;
      }
      .arrow {
        position: absolute;
        bottom: 32px;
        right: 32px;
        width: 100px;
        transform: rotate(-30deg);
        filter: drop-shadow(0 0 10px #fff);
        animation: bounce 2s infinite;
      }
      @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
      @keyframes slideIn {
        0% { transform: translateY(-20px); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
      }
      @keyframes bounce {
        0%, 100% { transform: translateY(0) rotate(-30deg); }
        50% { transform: translateY(-20px) rotate(-30deg); }
      }
      footer {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 1rem;
        color: white;
        text-shadow: 1px 1px 3px rgba(0,0,0,0.7);
      }
      .loader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        transition: opacity 0.5s;
      }
      .loader-content {
        color: white;
        font-size: 2rem;
        margin-bottom: 2rem;
      }
      .spinner {
        width: 50px;
        height: 50px;
        border: 5px solid rgba(255,255,255,0.3);
        border-radius: 50%;
        border-top-color: #fff;
        animation: spin 1s ease-in-out infinite;
      }
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
      .start-btn {
        margin-top: 2rem;
        padding: 1rem 2rem;
        background: linear-gradient(45deg, #e73c7e, #23d5ab);
        color: white;
        border: none;
        border-radius: 50px;
        font-size: 1.2rem;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        transition: all 0.3s;
        opacity: 0;
        animation: fadeIn 0.5s forwards 3s;
      }
      .start-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 20px rgba(0,0,0,0.3);
      }
      .hidden {
        display: none;
      }
    </style>
  </head>
  <body>
    <div class="loader" id="loader">
      <div class="spinner"></div>
      <div class="loader-content">Загрузка проекта...</div>
      <button class="start-btn" id="startBtn">Начать</button>
    </div>

    <div id="content" class="hidden">
      <h1>
        <span>Готовы ответить на любой вопрос,</span>
        Добро пожаловать в A-K Project! <br />
      </h1>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Arrow-right.svg/1200px-Arrow-right.svg.png" alt="Стрелка" class="arrow">
      <footer>Проект создан командой A-K Project © 2023</footer>
    </div>

    <script>
      document.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() {
          document.getElementById('startBtn').style.display = 'block';
        }, 3000);
        
        document.getElementById('startBtn').addEventListener('click', function() {
          document.getElementById('loader').style.opacity = '0';
          setTimeout(function() {
            document.getElementById('loader').style.display = 'none';
            document.getElementById('content').classList.remove('hidden');
          }, 500);
        });
      });
    </script>
  </body>
</html>
`;