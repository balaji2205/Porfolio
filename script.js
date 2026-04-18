 const roles = ["Full Stack Developer.", "Angular Specialist.", "Freelancer.", "Problem Solver."];
    let i = 0, j = 0, deleting = false;

    function type() {
      const el = document.getElementById("typed");
      const current = roles[i];
      el.textContent = current.substring(0, j);

      if (!deleting && j === current.length) {
        setTimeout(() => { deleting = true; type(); }, 1800);
        return;
      }
      if (deleting && j === 0) {
        deleting = false;
        i = (i + 1) % roles.length;
      }
      j += deleting ? -1 : 1;
      setTimeout(type, deleting ? 40 : 90);
    }
    type();

    // ── SCROLL REVEAL ──
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("visible"); }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));