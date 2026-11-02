(() => {
  const FIELD = { w: 400, h: 640 };

  const DECK = [
    {
      fr: "Bonjour, comment allez-vous ?",
      en: "Hello, how are you?",
      ok: ["Hi, how are you?", "Good day, how are you?", "How are you?"],
    },
    {
      fr: "Je m'appelle Marie.",
      en: "My name is Marie.",
      ok: ["I am called Marie.", "I'm called Marie."],
    },
    {
      fr: "Où est la gare ?",
      en: "Where is the train station?",
      ok: ["Where is the station?"],
    },
    {
      fr: "Je voudrais un café, s'il vous plaît.",
      en: "I would like a coffee, please.",
      ok: ["I would like a coffee.", "Can I have a coffee, please?", "I want a coffee, please."],
    },
    {
      fr: "Quelle heure est-il ?",
      en: "What time is it?",
      ok: ["What's the time?"],
    },
    {
      fr: "Je ne comprends pas.",
      en: "I don't understand.",
      ok: ["I do not understand."],
    },
    {
      fr: "Pouvez-vous parler plus lentement ?",
      en: "Can you speak more slowly?",
      ok: ["Could you speak more slowly?", "Can you speak slower?"],
    },
    {
      fr: "Combien ça coûte ?",
      en: "How much does it cost?",
      ok: ["How much is it?", "How much does that cost?"],
    },
    {
      fr: "Je suis perdu.",
      en: "I am lost.",
      ok: ["I'm lost."],
    },
    {
      fr: "Il fait froid aujourd'hui.",
      en: "It is cold today.",
      ok: ["It's cold today.", "The weather is cold today."],
    },
    {
      fr: "Nous allons au marché.",
      en: "We are going to the market.",
      ok: ["We're going to the market."],
    },
    {
      fr: "J'ai faim et j'ai soif.",
      en: "I am hungry and thirsty.",
      ok: ["I'm hungry and thirsty.", "I am hungry and I am thirsty."],
    },
    {
      fr: "Elle habite à Paris.",
      en: "She lives in Paris.",
      ok: ["She is living in Paris."],
    },
    {
      fr: "Le livre est sur la table.",
      en: "The book is on the table.",
    },
    {
      fr: "Je dois partir maintenant.",
      en: "I have to leave now.",
      ok: ["I must leave now.", "I need to leave now."],
    },
    {
      fr: "Est-ce que tu aimes le fromage ?",
      en: "Do you like cheese?",
      ok: ["Do you like the cheese?"],
    },
    {
      fr: "Ils arrivent demain matin.",
      en: "They arrive tomorrow morning.",
      ok: ["They are arriving tomorrow morning.", "They will arrive tomorrow morning."],
    },
    {
      fr: "Je cherche la rue Victor Hugo.",
      en: "I am looking for Victor Hugo Street.",
      ok: [
        "I'm looking for Victor Hugo Street.",
        "I am looking for Rue Victor Hugo.",
        "I'm looking for Rue Victor Hugo.",
      ],
    },
    {
      fr: "Je voudrais l'addition.",
      en: "I would like the bill.",
      ok: ["I would like the check.", "Can I have the bill?", "The bill, please.", "Check, please."],
    },
    {
      fr: "Où sont les toilettes ?",
      en: "Where are the toilets?",
      ok: ["Where is the bathroom?", "Where is the restroom?", "Where are the restrooms?"],
    },
    {
      fr: "C'est trop cher.",
      en: "That is too expensive.",
      ok: ["It's too expensive.", "This is too expensive.", "That's too expensive."],
    },
    {
      fr: "À demain !",
      en: "See you tomorrow.",
      ok: ["Until tomorrow."],
    },
    {
      fr: "Je t'aime.",
      en: "I love you.",
    },
    {
      fr: "Quel âge as-tu ?",
      en: "How old are you?",
    },
    {
      fr: "Le train part à huit heures.",
      en: "The train leaves at eight o'clock.",
      ok: ["The train leaves at eight.", "The train leaves at 8.", "The train departs at eight."],
    },
    {
      fr: "Je ne parle pas bien le français.",
      en: "I don't speak French well.",
      ok: ["I do not speak French well.", "I don't speak French very well."],
    },
    {
      fr: "Merci beaucoup pour votre aide.",
      en: "Thank you very much for your help.",
      ok: ["Thanks a lot for your help.", "Thank you so much for your help."],
    },
    {
      fr: "Il pleut depuis ce matin.",
      en: "It has been raining since this morning.",
      ok: ["It's been raining since this morning."],
    },
    {
      fr: "Pouvez-vous m'aider ?",
      en: "Can you help me?",
      ok: ["Could you help me?"],
    },
    {
      fr: "Est-ce que vous pouvez me dire où se trouve le musée ?",
      en: "Can you tell me where the museum is?",
      ok: ["Could you tell me where the museum is?", "Can you tell me where to find the museum?"],
    },
    {
      fr: "Je ne sais pas comment aller à la gare du Nord.",
      en: "I don't know how to get to the Gare du Nord.",
      ok: [
        "I do not know how to get to the Gare du Nord.",
        "I don't know how to get to Gare du Nord.",
      ],
    },
    {
      fr: "Elle voudrait un croissant et un café au lait.",
      en: "She would like a croissant and a coffee with milk.",
      ok: ["She wants a croissant and a coffee with milk.", "She would like a croissant and a café au lait."],
    },
    {
      fr: "Nous avons réservé une table près de la fenêtre.",
      en: "We reserved a table near the window.",
      ok: [
        "We have reserved a table near the window.",
        "We booked a table near the window.",
        "We've reserved a table near the window.",
        "We reserved a table by the window.",
      ],
    },
  ];

  const frenchEl = document.getElementById("french");
  const answerInput = document.getElementById("answer");
  const form = document.getElementById("answer-form");
  const checkBtn = document.getElementById("check");
  const feedback = document.getElementById("feedback");
  const nextBtn = document.getElementById("next");
  const scoreEl = document.getElementById("score");
  const streakEl = document.getElementById("streak");
  const bestEl = document.getElementById("best");
  const statusEl = document.getElementById("status");
  const meterBar = document.getElementById("meter-bar");
  const plaque = document.getElementById("plaque");
  const card = document.getElementById("card");
  const kicker = document.getElementById("kicker");
  const overlay = document.getElementById("overlay");
  const startBtn = document.getElementById("start");
  const resetBtn = document.getElementById("reset");
  const canvas = document.getElementById("world");
  const ctx = canvas.getContext("2d");

  const MatterRef = window.Matter;
  if (!MatterRef) {
    document.getElementById("overlay-copy").textContent =
      "Matter.js did not load, so the ball cannot drop. Reload and try again.";
    return;
  }

  const { Engine, Runner, Bodies, Composite, Events, Body } = MatterRef;

  let engine = null;
  let runner = null;
  let ball = null;
  let pegs = [];
  let floorTop = FIELD.h - 32;
  let trail = [];
  let phase = "ready";
  let current = null;
  let queue = [];
  let round = 0;
  let score = 0;
  let streak = 0;
  let best = 0;
  let solved = false;
  let stillFrames = 0;
  let stuckFrames = 0;
  let spec = layoutFor("un deux trois quatre cinq");

  function wordCount(sentence) {
    return sentence.split(/\s+/).filter((word) => /[A-Za-zÀ-ÿ0-9]/.test(word)).length;
  }

  function layoutFor(sentence) {
    const words = wordCount(sentence);
    // Same peg board every round. Longer sentences get a slower clock
    // so the ball takes longer to finish the same drop.
    const timeScale = words >= 8 ? 0.42 : words >= 5 ? 0.5 : 0.58;
    return {
      rows: 8,
      spacingX: 56,
      spacingY: 62,
      top: 88,
      pegR: 5,
      ballR: 11,
      gravity: 0.48,
      bounce: 0.55,
      air: 0.01,
      timeScale,
    };
  }

  function fold(value) {
    let text = value
      .toLowerCase()
      .replace(/[’‘]/g, "'")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    const swaps = [
      ["i'm", "i am"],
      ["you're", "you are"],
      ["we're", "we are"],
      ["they're", "they are"],
      ["it's", "it is"],
      ["that's", "that is"],
      ["what's", "what is"],
      ["don't", "do not"],
      ["can't", "cannot"],
      ["won't", "will not"],
      ["i've", "i have"],
      ["we've", "we have"],
      ["i'd", "i would"],
      ["he's", "he is"],
      ["she's", "she is"],
      ["isn't", "is not"],
      ["aren't", "are not"],
    ];
    for (const [from, to] of swaps) text = text.split(from).join(to);
    return text
      .replace(/'/g, "")
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function levenshtein(a, b) {
    const m = a.length;
    const n = b.length;
    if (m === 0) return n;
    if (n === 0) return m;
    let prev = new Array(n + 1);
    let curr = new Array(n + 1);
    for (let j = 0; j <= n; j += 1) prev[j] = j;
    for (let i = 1; i <= m; i += 1) {
      curr[0] = i;
      const ca = a.charCodeAt(i - 1);
      for (let j = 1; j <= n; j += 1) {
        const cost = ca === b.charCodeAt(j - 1) ? 0 : 1;
        curr[j] = Math.min(prev[j] + 1, curr[j - 1] + 1, prev[j - 1] + cost);
      }
      const swap = prev;
      prev = curr;
      curr = swap;
    }
    return prev[n];
  }

  function containsPhrase(haystack, needle) {
    return ` ${haystack} `.includes(` ${needle} `);
  }

  function isCorrect(input, item) {
    const guess = fold(input);
    if (!guess) return false;
    const targets = [item.en, ...(item.ok || [])].map(fold);
    return targets.some((target) => {
      if (!target) return false;
      if (guess === target) return true;
      if (containsPhrase(guess, target) && guess.length - target.length <= 16) return true;
      if (Math.abs(guess.length - target.length) > 3) return false;
      const limit = target.length > 24 ? 3 : target.length > 12 ? 2 : 1;
      return levenshtein(guess, target) <= limit;
    });
  }

  function shuffle(list) {
    const copy = list.slice();
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function fitCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(FIELD.w * dpr);
    canvas.height = Math.round(FIELD.h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function mountWorld(nextSpec, hold) {
    if (runner) Runner.stop(runner);
    if (engine) Events.off(engine);

    spec = nextSpec;
    engine = Engine.create();
    engine.gravity.y = spec.gravity;
    engine.gravity.scale = 0.001;
    engine.timing.timeScale = spec.timeScale;
    engine.positionIterations = 10;
    runner = Runner.create();
    Runner.run(runner, engine);

    const { w, h } = FIELD;
    floorTop = h - 32;
    const wallT = 20;
    const bodies = [
      Bodies.rectangle(wallT / 2, h / 2, wallT, h, { isStatic: true, label: "wall", friction: 0.04 }),
      Bodies.rectangle(w - wallT / 2, h / 2, wallT, h, { isStatic: true, label: "wall", friction: 0.04 }),
      Bodies.rectangle(w / 2, -24, w, 48, { isStatic: true, label: "wall", friction: 0.02 }),
      Bodies.rectangle(w / 2, floorTop + 18, w - 8, 36, {
        isStatic: true,
        label: "floor",
        friction: 0.85,
      }),
    ];

    pegs = [];
    const left = 36;
    const right = w - 36;
    for (let row = 0; row < spec.rows; row += 1) {
      const y = spec.top + row * spec.spacingY;
      let x = left + (row % 2 ? spec.spacingX / 2 : 0);
      while (x <= right + 0.5) {
        const jitter = hold ? 0 : (Math.random() - 0.5) * 4;
        const peg = Bodies.circle(x + jitter, y, spec.pegR, {
          isStatic: true,
          label: "peg",
          friction: 0.02,
        });
        peg.glow = 0;
        pegs.push(peg);
        x += spec.spacingX;
      }
    }

    const spawnX = hold ? w / 2 : 80 + Math.random() * (w - 160);
    ball = Bodies.circle(spawnX, 24, spec.ballR, {
      isStatic: hold,
      label: "ball",
      restitution: spec.bounce,
      friction: 0.03,
      frictionAir: spec.air,
      density: 0.0015,
    });
    if (!hold) Body.setVelocity(ball, { x: (Math.random() - 0.5) * 2, y: 0 });

    trail = [];
    stillFrames = 0;
    stuckFrames = 0;
    Composite.add(engine.world, [...bodies, ...pegs, ball]);
    Events.on(engine, "collisionStart", onHit);
    Events.on(engine, "afterUpdate", onAfter);
  }

  function onHit(event) {
    for (const pair of event.pairs) {
      const a = pair.collision.parentA;
      const b = pair.collision.parentB;
      const peg = a.label === "peg" ? a : b.label === "peg" ? b : null;
      const hitBall = a.label === "ball" || b.label === "ball";
      if (peg && hitBall) peg.glow = 1;
      if (hitBall && (a.label === "floor" || b.label === "floor")) {
        pair.restitution = 0.05;
        pair.friction = 0.9;
      }
    }
  }

  function onAfter() {
    if (!ball) return;
    trail.push({ x: ball.position.x, y: ball.position.y });
    if (trail.length > 12) trail.shift();
    for (const peg of pegs) {
      if (peg.glow) peg.glow *= 0.86;
    }
    if (phase === "playing") checkSettle();
  }

  function checkSettle() {
    const onFloor = ball.position.y + ball.circleRadius >= floorTop - 2;
    const scale = spec.timeScale;
    if (!onFloor && ball.speed < 0.12 * scale) {
      stuckFrames += 1;
      if (stuckFrames >= 30) {
        const dir = ball.position.x < FIELD.w / 2 ? 1 : -1;
        Body.setPosition(ball, {
          x: Math.min(FIELD.w - 30, Math.max(30, ball.position.x + dir * 20)),
          y: ball.position.y + spec.pegR + 4,
        });
        Body.setVelocity(ball, { x: dir * 0.8, y: 1.5 });
        stuckFrames = 0;
      }
    } else {
      stuckFrames = 0;
    }

    if (ball.position.y > FIELD.h + 30) {
      Body.setPosition(ball, { x: FIELD.w / 2, y: floorTop - spec.ballR - 4 });
      Body.setVelocity(ball, { x: 0, y: 0.4 });
    }

    if (onFloor && ball.speed < 0.45 * scale) {
      stillFrames += 1;
      if (stillFrames >= 30) endRound();
    } else {
      stillFrames = 0;
    }
  }

  function showFeedback(text, kind) {
    feedback.textContent = text;
    feedback.className = kind ? `feedback ${kind}` : "feedback";
  }

  function renderStats() {
    if (streak > best) best = streak;
    scoreEl.textContent = String(score);
    streakEl.textContent = String(streak);
    bestEl.textContent = String(best);
  }

  function syncCheckButton() {
    checkBtn.disabled = phase !== "playing" || solved || fold(answerInput.value) === "";
  }

  function endRound() {
    if (phase !== "playing") return;
    phase = "ended";
    answerInput.disabled = true;
    nextBtn.hidden = false;
    if (!solved) {
      streak = 0;
      renderStats();
      card.classList.remove("is-good");
      card.classList.add("is-bad");
      showFeedback(`The ball stopped. “${current.fr}” means “${current.en}”.`, "bad");
    }
    syncCheckButton();
    nextBtn.focus();
  }

  function markSolved() {
    if (solved || phase !== "playing") return;
    solved = true;
    score += 1;
    streak += 1;
    renderStats();
    card.classList.remove("is-bad");
    card.classList.add("is-good");
    showFeedback(`Yes — ${current.en}`, "good");
    answerInput.disabled = true;
    nextBtn.hidden = false;
    syncCheckButton();
  }

  function startRound() {
    if (queue.length === 0) {
      queue = shuffle(DECK);
      if (current && queue[0] === current && queue.length > 1) queue.push(queue.shift());
    }
    current = queue.shift();
    solved = false;
    round += 1;
    phase = "playing";
    card.classList.remove("is-good", "is-bad", "shake");
    kicker.textContent = `Sentence ${round}`;
    frenchEl.textContent = current.fr;
    answerInput.disabled = false;
    answerInput.value = "";
    nextBtn.hidden = true;
    showFeedback("", "");
    mountWorld(layoutFor(current.fr), false);
    syncCheckButton();
    answerInput.focus();
  }

  function draw() {
    const { w, h } = FIELD;
    ctx.clearRect(0, 0, w, h);

    const sky = ctx.createLinearGradient(0, 0, 0, h);
    sky.addColorStop(0, "#2a211b");
    sky.addColorStop(1, "#120e0b");
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = "#3a291e";
    ctx.fillRect(0, 0, 20, h);
    ctx.fillRect(w - 20, 0, 20, h);

    const felt = ctx.createLinearGradient(0, floorTop, 0, h);
    felt.addColorStop(0, "#214232");
    felt.addColorStop(1, "#14281e");
    ctx.fillStyle = felt;
    ctx.fillRect(20, floorTop, w - 40, h - floorTop);

    for (const peg of pegs) {
      const glow = peg.glow || 0;
      ctx.beginPath();
      ctx.arc(peg.position.x, peg.position.y, spec.pegR + glow * 2.2, 0, Math.PI * 2);
      ctx.fillStyle = glow > 0.2 ? "#f6e7c4" : "#d7b56a";
      ctx.fill();
      ctx.beginPath();
      ctx.arc(peg.position.x - 1.4, peg.position.y - 1.5, 1.5, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.55)";
      ctx.fill();
    }

    const color = solved ? "#2f9d5a" : "#e25b32";
    for (let i = 0; i < trail.length; i += 1) {
      const point = trail[i];
      const t = (i + 1) / trail.length;
      ctx.globalAlpha = t * 0.28;
      ctx.beginPath();
      ctx.arc(point.x, point.y, spec.ballR * (0.35 + t * 0.65), 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    if (!ball) return;
    const x = ball.position.x;
    const y = ball.position.y;
    const r = ball.circleRadius;
    const shade = ctx.createRadialGradient(x - r * 0.35, y - r * 0.4, r * 0.2, x, y, r);
    shade.addColorStop(0, solved ? "#b7f0cb" : "#ffc2ad");
    shade.addColorStop(0.45, color);
    shade.addColorStop(1, solved ? "#146b38" : "#8d2c12");
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = shade;
    ctx.fill();
  }

  function describeMotion() {
    if (phase === "ready" || !ball) return "Ready to drop";
    const speed = ball.speed / spec.timeScale;
    const low = ball.position.y > FIELD.h * 0.72;
    if (phase === "ended") return solved ? "Rested — you had it" : "Rested";
    if (solved && speed >= 0.45) return "Got it — still moving";
    if (solved) return "Got it — almost still";
    if (ball.position.y < 70) return "Dropping";
    if (low && speed < 0.8) return "About to stop";
    if (speed > 5) return "Falling";
    if (speed > 1.6) return "Bouncing";
    return "Slowing down";
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (phase !== "playing" || solved) return;
    const value = answerInput.value;
    if (!fold(value)) return;
    if (isCorrect(value, current)) {
      markSolved();
      return;
    }
    showFeedback("Not quite — try again before it stops.", "bad");
    card.classList.remove("shake");
    void card.offsetWidth;
    card.classList.add("shake");
    answerInput.focus();
  });

  answerInput.addEventListener("input", syncCheckButton);

  nextBtn.addEventListener("click", startRound);

  function resetGame() {
    score = 0;
    streak = 0;
    best = 0;
    round = 0;
    queue = [];
    current = null;
    solved = false;
    renderStats();
    card.classList.remove("is-good", "is-bad", "shake");
    showFeedback("", "");
    answerInput.value = "";
    nextBtn.hidden = true;
    if (!overlay.hidden) {
      phase = "ready";
      kicker.textContent = "French to English";
      frenchEl.textContent = "The ball is waiting.";
      answerInput.disabled = true;
      syncCheckButton();
      mountWorld(layoutFor("un deux trois quatre cinq"), true);
      return;
    }
    startRound();
  }

  startBtn.addEventListener("click", () => {
    overlay.hidden = true;
    startRound();
  });

  resetBtn.addEventListener("click", resetGame);

  window.addEventListener("resize", fitCanvas);

  fitCanvas();
  mountWorld(layoutFor("un deux trois quatre cinq"), true);
  renderStats();
  startBtn.focus();

  function frame() {
    draw();
    const label = describeMotion();
    if (statusEl.textContent !== label) statusEl.textContent = label;
    plaque.classList.toggle("is-urgent", label === "About to stop");
    const speed = ball ? ball.speed / spec.timeScale : 0;
    meterBar.style.transform = `scaleX(${Math.max(0, Math.min(1, speed / 8))})`;
    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
})();
