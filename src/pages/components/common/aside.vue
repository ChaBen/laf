<template>
  <nav id="top-menu" role="navigation" style="opacity: 1;">
    <div class="menu-svg">
      <svg width="377px" height="2045px" viewBox="0 0 377 2045" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch -->
        <desc>Created with Sketch.</desc>
        <defs>
            <rect id="path-1" x="0.80112128" y="0" width="372.49866" height="110"></rect>
            <rect id="path-2" x="125" y="0" width="250" height="114"></rect>
        </defs>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="about-side" class="svg-link horizontal-link " :class="{ active: actived('/about') }" @click="navigateTo('/about')" data-gradient="about-side-gradient" transform="translate(4.000000, 303.000000)">
            <polygon id="Shape" stroke="#FFFFFF" stroke-width="3" fill="#000000" fill-rule="nonzero" points="0.3 0 0 476.1 370 0"></polygon>
            <text id="About" fill="#FFFFFF" font-family=".SFNSDisplay, .SF NS Display" font-size="40" font-weight="normal">
              <tspan x="37.681" y="72.1905">About</tspan>
            </text>
          </g>
          <g id="visit-side" class="svg-link radial-link " :class="{ active: actived('/visit') }" @click="navigateTo('/visit')" data-gradient="visit-side-gradient" transform="translate(3.000000, 301.000000)">
            <path d="M0.1,476.1 L369.9,476.1 L369.9,0 C246.6,158.7 123.4,317.4 0.1,476.1 Z" id="Shape" stroke="#FFFFFF" stroke-width="3" fill="#000000" fill-rule="nonzero"></path>
            <text id="Visit" fill="#FFFFFF" font-family=".SFNSDisplay, .SF NS Display" font-size="40" font-weight="normal">
              <tspan x="243.411" y="438.5404">V</tspan>
              <tspan x="269.016469" y="438.5404">isit</tspan>
            </text>
          </g>
          <g id="press-side" class="svg-link radial-link" :class="{ active: actived('/press') }" @click="navigateTo('/press')" data-gradient="press-side-gradient" transform="translate(3.000000, 1744.000000)">
            <polygon id="Shape" stroke="#FFFFFF" stroke-width="3" fill="#000000" fill-rule="nonzero" points="246.466732 0.699951172 246.466732 109.953302 123.233489 109.953302 0.100110688 109.953302 0.100110688 199.333329 0.100110688 298.699951 123.233489 298.699951 246.466732 298.699951 369.600111 298.699951 369.600111 199.333329 369.600111 100.066573 369.600111 0.699951172"></polygon>
            <text id="Press" font-family=".SFNSDisplay, .SF NS Display" font-size="40" font-weight="normal" fill="#FFFFFF">
              <tspan x="226.316216" y="264">Press</tspan>
            </text>
          </g>
          <g id="limo-side" class="svg-link radial-link " data-gradient="limo-side-gradient" data-href="http://jejulaf.com/limo-limo" transform="translate(155.000000, 939.000000)">
            <rect id="Shape" stroke="#FFFFFF" stroke-width="3" fill="#000000" fill-rule="nonzero" x="0.8" y="0" width="217.3" height="217.996544"></rect>
            <text id="LimoLimo" fill="#FFFFFF" font-family=".SFNSDisplay, .SF NS Display" font-size="40" font-weight="normal">
              <tspan x="67.3178719" y="103.199685">Limo</tspan>
              <tspan x="67.3178719" y="150.199685">Limo</tspan>
            </text>
          </g>
          <g id="events-side" class="svg-link vertical-link " data-gradient="events-side-gradient" data-href="http://jejulaf.com/events" transform="translate(3.000000, 777.000000)">
            <polygon id="Shape" stroke="#FFFFFF" stroke-width="3" fill="#000000" fill-rule="nonzero" points="153.400024 163 370.200024 163 370.200024 0 0.400024414 0 0.400024414 380.1 155.100024 380.1"></polygon>
            <text id="Events" fill="#FFFFFF" font-family=".SFNSDisplay, .SF NS Display" font-size="40" font-weight="normal">
              <tspan x="37.578" y="70.682">Events</tspan>
            </text>
          </g>
          <g id="channel-side" class="svg-link " data-gradient="channel-side-gradient" data-href="http://jejulaf.com/channel" transform="translate(3.000000, 1157.000000)">
            <polygon id="Shape" stroke="#FFFFFF" stroke-width="3" fill="#000000" fill-rule="nonzero" points="0.100108106 0 0.100108106 161.799998 0.100108106 323.599996 0.100108106 485.399994 123.466649 485.399994 123.466649 323.599996 246.733135 323.599996 246.733135 161.799998 370.099676 161.799998 370.099676 0"></polygon>
            <text id="Channel" fill="#FFFFFF" font-family=".SFNSDisplay, .SF NS Display" font-size="40" font-weight="normal">
              <tspan x="36.6159415" y="71.3977">Channel</tspan>
            </text>
          </g>
          <g id="artists-side" class="svg-link vertical-link" data-gradient="artists-side-gradient" data-href="http://jejulaf.com/artists" transform="translate(3.000000, 2.000000)">
            <polygon id="Shape" stroke="#FFFFFF" stroke-width="3" fill="#000000" fill-rule="nonzero" points="0.499326146 0 0.499326146 100.366722 0.499326146 200.633278 0.499326146 301 123.699748 301 246.800252 301 370.000674 301 370.000674 110.483527 246.800252 110.483527 123.699748 110.483527 123.699748 0"></polygon>
            <text id="Artists" fill="#FFFFFF" font-family=".SFNSDisplay, .SF NS Display" font-size="40" font-weight="normal">
              <tspan x="201.726415" y="267">Artists</tspan>
            </text>
          </g>
          <g id="news-side" class="svg-link horizontal-link " data-gradient="news-side-gradient" data-href="http://jejulaf.com/blog" transform="translate(124.000000, 1312.000000)">
            <polygon id="Shape" stroke="#FFFFFF" stroke-width="3" fill="#000000" fill-rule="nonzero" points="118.650002 0 118.449759 164.697224 0 164.697224 0 326.399994 246.499031 326.399994 246.999639 0"></polygon>
            <text id="News" fill="#FFFFFF" font-family=".SFNSDisplay, .SF NS Display" font-size="40" font-weight="normal">
              <tspan x="100.112975" y="293.1541">News</tspan>
            </text>
          </g>
          <g id="calendar-side" class="svg-link vertical-link" :class="{ active: actived('/calendar') }" data-gradient="calendar-side-gradient" data-href="http://jejulaf.com/calendar" transform="translate(1.000000, 1637.000000)">
            <g id="Rectangle">
              <use fill="#000000" fill-rule="evenodd" xlink:href="#path-1"></use>
              <rect stroke="#FFFFFF" stroke-width="3" x="2.30112128" y="1.5" width="369.49866" height="107"></rect>
            </g>
            <text fill="#FFFFFF" font-family=".SFNSDisplay, .SF NS Display" font-size="40" font-weight="normal">
              <tspan x="107.802621" y="76">Calendar</tspan>
            </text>
          </g>
          <g id="tickets-side" class="svg-link horizontal-link " data-gradient="tickets-side-gradient" data-href="http://jejulaf.com/tickets" transform="translate(3.000000, 1746.000000)">
            <rect id="Rectangle" stroke="#FFFFFF" stroke-width="3" fill="#000000" fill-rule="nonzero" x="0.300048828" y="0" width="247" height="109.70005"></rect>
            <text id="Tickets" fill="#FFFFFF" font-family=".SFNSDisplay, .SF NS Display" font-size="40" font-weight="normal">
              <tspan x="60.7089844" y="74">Tickets</tspan>
            </text>
          </g>
          <g id="Rectangle-2">
            <use fill="#000000" fill-rule="evenodd" xlink:href="#path-2"></use>
            <rect stroke="#FFFFFF" stroke-width="3" x="126.5" y="1.5" width="247" height="111"></rect>
          </g>
        </g>
          
        <!-- about -->
        <linearGradient id="about-side-gradient" x1="96.8865741%" y1="62.4869466%" x2="0%" y2="62.4869466%" data-x1="96.8865741" data-y1="62.4869466" data-x2="0" data-y2="62.4869466" data-grow="up">
          <stop stop-color="#FF96D5" offset="0%"></stop>
          <stop stop-color="#FF96D5" offset="29.77%"></stop>
          <stop stop-color="#FF97CE" offset="40.58%"></stop>
          <stop stop-color="#FF98B9" offset="57.0452009%"></stop>
          <stop stop-color="#FF9A98" offset="76.36%"></stop>
          <stop stop-color="#FF9D6F" offset="95.95%"></stop>
          <stop stop-color="#FF9D6F" offset="100%"></stop>
        </linearGradient>
        
        <!-- visit -->
        <radialGradient id="visit-side-gradient" cx="50%" cy="50%" fx="50%" fy="50%" r="60.43211%" gradientTransform="translate(0.500000,0.500000),scale(0.888827,1.000000),rotate(90.000000),translate(-0.500000,-0.500000)" data-r="60.43211" data-grow="up">
          <stop stop-color="#00FFF7" offset="0%"></stop>
          <stop stop-color="#00FFF7" offset="31.7283163%"></stop>
          <stop stop-color="#09FFA3" offset="81.6984216%"></stop>
          <stop stop-color="#12FF4C" offset="100%"></stop>
        </radialGradient>
        
        <!-- press gradient -->
        <radialGradient id="press-side-gradient" cx="50.8327901%" cy="50%" fx="50.8327901%" fy="50%" r="50%" gradientTransform="translate(0.508328,0.500000),scale(0.665417,1.000000),rotate(90.000000),scale(1.000000,1.511267),translate(-0.508328,-0.500000)" data-r="50" data-grow="up">
          <stop stop-color="#EF0007" offset="0%"></stop>
          <stop stop-color="#EF0007" offset="10.9534439%"></stop>
          <stop stop-color="#7A0038" offset="60.3176818%"></stop>
          <stop stop-color="#5A0029" offset="73.698581%"></stop>
          <stop stop-color="#000000" offset="100%"></stop>
        </radialGradient>

        <!-- tickets gradient -->
        <linearGradient id="tickets-side-gradient" x1="0.00117107731%" y1="50.0028625%" x2="99.9991102%" y2="50.0028625%" data-x1="0.00117107731" data-y1="50.0028625" data-x2="99.9991102" data-y2="50.0028625" data-grow="up">
          <stop stop-color="#00FF94" offset="0%"></stop>
          <stop stop-color="#00FF94" offset="3.48636%"></stop>
          <stop stop-color="#28E38B" offset="7.816461%"></stop>
          <stop stop-color="#60BB7E" offset="14.62%"></stop>
          <stop stop-color="#919973" offset="21.45%"></stop>
          <stop stop-color="#B87E69" offset="28.16%"></stop>
          <stop stop-color="#D76862" offset="34.73%"></stop>
          <stop stop-color="#ED585D" offset="41.12%"></stop>
          <stop stop-color="#FB4F5A" offset="47.24%"></stop>
          <stop stop-color="#FF4C59" offset="52.8%"></stop>
          <stop stop-color="#F6525B" offset="56.81%"></stop>
          <stop stop-color="#DD6461" offset="63.42%"></stop>
          <stop stop-color="#B4816A" offset="71.82%"></stop>
          <stop stop-color="#7BA877" offset="81.69%"></stop>
          <stop stop-color="#34DB88" offset="92.65%"></stop>
          <stop stop-color="#00FF94" offset="100%"></stop>
        </linearGradient>

        <!-- limo gradient -->
        <radialGradient id="limo-side-gradient" cx="50%" cy="50%" fx="50%" fy="50%" r="50%" gradientTransform="translate(0.500000,0.500000),scale(0.999160,1.000000),rotate(-90.000000),translate(-0.500000,-0.500000)" data-r="50" data-grow="up">
          <stop stop-color="#35FE97" offset="0%"></stop>
          <stop stop-color="#31E8A1" offset="34.1856665%"></stop>
          <stop stop-color="#0E27FC" offset="100%"></stop>
        </radialGradient>
        
        <!-- calendar gradient -->
        <linearGradient id="calendar-side-gradient" x1="50.0008333%" y1="99.0639009%" x2="50.0008333%" y2="0.890300862%" data-x1="50.0008333" data-y1="99.0639009" data-x2="50.0008333" data-y2="0.890300862" data-grow="up">
          <stop stop-color="#00005E" offset="0%"></stop>
          <stop stop-color="#00005E" offset="18.67%"></stop>
          <stop stop-color="#000000" offset="86.55%"></stop>
          <stop stop-color="#000000" offset="100%"></stop>
        </linearGradient>

        <!-- events gradient -->
        <linearGradient id="events-side-gradient" x1="50%" y1="0%" x2="50%" y2="97.660236%" data-x1="50" data-y1="0" data-x2="50" data-y2="97.660236" data-grow="up">
          <stop stop-color="#EE0077" offset="0%"></stop>
          <stop stop-color="#8F0B8A" offset="28.7308673%"></stop>
          <stop stop-color="#5E1094" offset="49.8445472%"></stop>
          <stop stop-color="#870B8C" offset="71.0180166%"></stop>
          <stop stop-color="#EE0077" offset="100%"></stop>
        </linearGradient>
        
        <!-- news-gradient -->
        <linearGradient id="news-side-gradient" x1="87.2875584%" y1="77.399677%" x2="14.4019741%" y2="77.399677%" data-x1="87.2875584" data-y1="77.399677" data-x2="14.4019741" data-y2="77.399677" data-grow="up">
          <stop stop-color="#FF4C59" offset="0%"></stop>
          <stop stop-color="#FFFF00" offset="100%"></stop>
        </linearGradient>
        
        <!-- artists-gradient -->
        <linearGradient id="artists-side-gradient" x1="50%" y1="87.5024958%" x2="50%" y2="17.190848599999995%" data-x1="50" data-y1="98.5024958" data-x2="50" data-y2="28.1908486" data-grow="up">
          <stop stop-color="#FFFFFF" offset="0%"></stop>
          <stop stop-color="#BCBBBB" offset="24.62%"></stop>
          <stop stop-color="#7B7979" offset="51.16%"></stop>
          <stop stop-color="#4B4849" offset="73.49%"></stop>
          <stop stop-color="#2E2A2B" offset="90.43%"></stop>
          <stop stop-color="#231F20" offset="100%"></stop>
        </linearGradient>
      </svg>
    </div>
  </nav>
</template>

<script>
export default {
  created() {
    console.log(this);
  },
  methods: {
    navigateTo(nav) {
      this.$router.push({ path: nav });
    },
    actived(path) {
      return path === this.$route.path;
    }
  }
}
</script>
