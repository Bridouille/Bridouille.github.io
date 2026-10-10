---
layout: default
title: Flight Pass, your boarding pass wallet
permalink: /flight-pass/
---
<style>
.fp { --seed:#3B80E1; --primary:#005DB8; --deep:#001B3E; --muted:#4a5872; --soft:#EEF4FF; --line:#dbe3f0;
  font-family:'Roboto',system-ui,sans-serif; color:var(--deep); }
.fp * { box-sizing:border-box; }
.fp a { color:var(--primary); }
.fp-wrap { max-width:1080px; margin:0 auto; padding:0 24px; }

.fp-hero { background:linear-gradient(120deg,#C9DCFB,#E8F0FF 58%,#F7FAFF); padding:72px 0 64px; overflow:hidden; }
.fp-hero .fp-wrap { display:flex; align-items:center; gap:56px; }
.fp-hero-text { flex:1; min-width:0; }
.fp-brand { display:flex; align-items:center; gap:14px; font-size:24px; font-weight:700; }
.fp-brand img { width:56px; height:56px; border-radius:14px; box-shadow:0 6px 16px rgba(0,93,184,.25); }
.fp-hero h1 { font-size:54px; line-height:1.05; letter-spacing:-1px; margin:28px 0 18px; font-weight:700; }
.fp-hero h1 span { color:var(--primary); display:block; }
.fp-hero p { font-size:19px; line-height:1.55; color:var(--muted); max-width:470px; margin:0 0 30px; }
.fp-badge img { height:64px; margin-left:-10px; }
.fp-small { font-size:13px; color:var(--muted); margin-top:6px; }

.fp-phone { width:250px; flex:none; border-radius:36px; padding:9px; background:#1d2027;
  box-shadow:0 30px 60px rgba(0,27,62,.28); }
.fp-phone img { display:block; width:100%; border-radius:28px; }
.fp-hero .fp-phone { width:280px; transform:rotate(3deg); }

.fp-section { padding:72px 0; }
.fp-section.fp-alt { background:var(--soft); }
.fp-section h2 { font-size:34px; letter-spacing:-.5px; margin:0 0 10px; font-weight:700; }
.fp-lead { font-size:18px; color:var(--muted); margin:0 0 40px; max-width:640px; line-height:1.55; }

.fp-cases { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
.fp-case { background:#fff; border:1px solid var(--line); border-radius:20px; padding:24px; }
.fp-case .fp-ic { width:44px; height:44px; border-radius:13px; background:#D6E3FF; color:var(--primary);
  display:grid; place-items:center; margin-bottom:16px; }
.fp-case .fp-ic .material-icons { font-size:24px; }
.fp-case h3 { font-size:18px; margin:0 0 8px; font-weight:700; }
.fp-case p { margin:0; color:var(--muted); line-height:1.55; font-size:15px; }

.fp-shots { display:flex; gap:28px; justify-content:center; flex-wrap:wrap; }
.fp-shot { text-align:center; }
.fp-shot .fp-phone { width:210px; margin:0 auto; }
.fp-shot figcaption { margin-top:16px; font-weight:700; font-size:15px; }
.fp-shot figcaption small { display:block; font-weight:400; color:var(--muted); font-size:13px; margin-top:3px; }

.fp-private { display:flex; gap:20px; align-items:flex-start; background:#fff; border:1px solid var(--line);
  border-radius:20px; padding:28px; }
.fp-private .material-icons { font-size:32px; color:var(--primary); }
.fp-private p { margin:6px 0 0; color:var(--muted); line-height:1.6; }

.fp-cta { text-align:center; }
.fp-cta img.fp-icon { width:72px; height:72px; border-radius:18px; }
.fp-cta h2 { margin-top:18px; }
.fp-links { margin-top:28px; font-size:14px; color:var(--muted); }
.fp-links a { margin:0 10px; }

@media (max-width:820px) {
  .fp-hero .fp-wrap { flex-direction:column; text-align:center; gap:40px; }
  .fp-brand { justify-content:center; }
  .fp-hero p { margin-left:auto; margin-right:auto; }
  .fp-hero h1 { font-size:40px; }
  .fp-cases { grid-template-columns:1fr; }
  .fp-private { flex-direction:column; }
}
</style>

<div class="fp">

  <header class="fp-hero">
    <div class="fp-wrap">
      <div class="fp-hero-text">
        <div class="fp-brand"><img src="/assets/flight-pass/icon.svg" alt="">Flight Pass</div>
        <h1>Any airline.<span>One wallet.</span></h1>
        <p>Keep every boarding pass in one place, get your gate and delays as they happen, and show the barcode at the gate, even with no signal.</p>
        <a class="fp-badge" href="https://play.google.com/store/apps/details?id=com.flight.manager.scanner">
          <img alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png">
        </a>
        <div class="fp-small">Free on Android. No account needed.</div>
      </div>
      <div class="fp-phone"><img src="/assets/flight-pass/screens/pass.jpg" alt="A boarding pass in Flight Pass, with its barcode, gate and departure time"></div>
    </div>
  </header>

  <section class="fp-section">
    <div class="fp-wrap">
      <h2>Made for the moments that matter</h2>
      <p class="fp-lead">From the email your airline sends to the scanner at the gate, Flight Pass takes care of the parts of a trip that usually go wrong.</p>
      <div class="fp-cases">
        <div class="fp-case">
          <div class="fp-ic"><span class="material-icons">qr_code_2</span></div>
          <h3>At the gate, offline</h3>
          <p>Your pass opens in one tap, large and bright, so the scanner reads it first time. No signal needed.</p>
        </div>
        <div class="fp-case">
          <div class="fp-ic"><span class="material-icons">file_download</span></div>
          <h3>Any pass, any airline</h3>
          <p>Import the PDF from your check-in email, a screenshot, a photo of a paper pass or a .pkpass file.</p>
        </div>
        <div class="fp-case">
          <div class="fp-ic"><span class="material-icons">notifications_active</span></div>
          <h3>Gate and delays as they happen</h3>
          <p>A reminder before you leave, with your terminal and gate, and a heads-up when the departure time moves.</p>
        </div>
        <div class="fp-case">
          <div class="fp-ic"><span class="material-icons">connecting_airports</span></div>
          <h3>Connections in order</h3>
          <p>Multi-leg trips show one card per flight, in the order you fly them, with the time you have to connect.</p>
        </div>
        <div class="fp-case">
          <div class="fp-ic"><span class="material-icons">widgets</span></div>
          <h3>Your next flight at a glance</h3>
          <p>A home screen widget shows the route, departure time, gate and status without opening the app.</p>
        </div>
        <div class="fp-case">
          <div class="fp-ic"><span class="material-icons">insights</span></div>
          <h3>Your travel in numbers</h3>
          <p>Distance flown, time in the air, airports visited, favourite routes and airlines, year after year.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="fp-section fp-alt">
    <div class="fp-wrap">
      <h2>See it in action</h2>
      <p class="fp-lead">Everything about your flight, one tap away.</p>
      <div class="fp-shots">
        <figure class="fp-shot">
          <div class="fp-phone"><img src="/assets/flight-pass/screens/home.jpg" alt="Upcoming flights on the home screen" loading="lazy"></div>
          <figcaption>Your trips<small>Upcoming flights first</small></figcaption>
        </figure>
        <figure class="fp-shot">
          <div class="fp-phone"><img src="/assets/flight-pass/screens/notification.jpg" alt="A notification with the terminal, gate and seat" loading="lazy"></div>
          <figcaption>Before you leave<small>Terminal, gate and seat</small></figcaption>
        </figure>
        <figure class="fp-shot">
          <div class="fp-phone"><img src="/assets/flight-pass/screens/delayed.jpg" alt="A pass showing a 30 minute delay" loading="lazy"></div>
          <figcaption>When it's late<small>The new time, as it changes</small></figcaption>
        </figure>
        <figure class="fp-shot">
          <div class="fp-phone"><img src="/assets/flight-pass/screens/import.jpg" alt="The choices to add a boarding pass" loading="lazy"></div>
          <figcaption>Adding a pass<small>PDF, image, camera or .pkpass</small></figcaption>
        </figure>
      </div>
    </div>
  </section>

  <section class="fp-section">
    <div class="fp-wrap">
      <div class="fp-private">
        <span class="material-icons">lock</span>
        <div>
          <h2 style="font-size:24px;margin:0">Your passes stay yours</h2>
          <p>Your boarding passes are stored on your phone, with no account and no server of mine in between. Only anonymous statistics and crash reports help me improve the app. <a href="/flight-manager-privacy-policy/">Read the privacy policy</a>.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="fp-section fp-alt fp-cta">
    <div class="fp-wrap">
      <img class="fp-icon" src="/assets/flight-pass/icon.svg" alt="">
      <h2>Ready for your next flight?</h2>
      <p class="fp-lead" style="margin:0 auto 24px">Free on Google Play, for any airline that issues a boarding pass with a barcode.</p>
      <a class="fp-badge" href="https://play.google.com/store/apps/details?id=com.flight.manager.scanner">
        <img alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png">
      </a>
      <div class="fp-links">
        <a href="/flight-manager-privacy-policy/">Privacy policy</a>
        <a href="/flight-manager-terms-of-service/">Terms of service</a>
        <a href="mailto:nicobr65@gmail.com">Contact</a>
      </div>
      <p class="fp-small" style="margin-top:18px">Google Play and the Google Play logo are trademarks of Google LLC.</p>
    </div>
  </section>

</div>
