<div class="copyright">{#
#}{%- set current = date(Date.now(), "YYYY") %}{#
#}{%- if theme.footer.beian.enable %}{#
#}  {{ next_url('http://www.beian.miit.gov.cn', theme.footer.beian.icp + ' ') }}{#
#}{%- endif %}{#
#}&copy; {% if theme.footer.since and theme.footer.since != current %}{{ theme.footer.since }} – {% endif %}{#
#}<span itemprop="copyrightYear">{{ current }}</span>
  <span class="with-love" id="animate">
    <i class="fa fa-{{ theme.footer.icon.name }}"></i>
  </span>
  <span class="author" itemprop="copyrightHolder">{{ theme.footer.copyright || author }}</span>

  {%- if config.symbols_count_time.total_symbols %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-area-chart"></i>
    </span>
    {%- if theme.symbols_count_time.item_text_total %}
      <span class="post-meta-item-text">{{ __('symbols_count_time.count_total') + __('symbol.colon') }}</span>
    {%- endif %}
    <span title="{{ __('symbols_count_time.count_total') }}">{#
    #}{{ symbolsCountTotal(site) }}{#
  #}</span>
  {%- endif %}

  {%- if config.symbols_count_time.total_time %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-coffee"></i>
    </span>
    {%- if theme.symbols_count_time.item_text_total %}
      <span class="post-meta-item-text">{{ __('symbols_count_time.time_total') }} &asymp;</span>
    {%- endif %}
    <span title="{{ __('symbols_count_time.time_total') }}">{#
    #}{{ symbolsTimeTotal(site, theme.symbols_count_time.awl, theme.symbols_count_time.wpm, __('symbols_count_time.time_minutes')) }}{#
  #}</span>
  {%- endif %}
</div>

{%- if theme.footer.powered.enable %}
  <div class="powered-by">{#
  #}{{ __('footer.powered', next_url('https://hexo.io', 'Hexo', {class: 'theme-link'})) }}{#
  #}{%- if theme.footer.powered.version %} v{{ hexo_env('version') }}{%- endif %}{#
 #}</div>
{%- endif %}

{%- if theme.footer.powered.enable and theme.footer.theme.enable %}
  <span class="post-meta-divider">|</span>
{%- endif %}

{%- if theme.footer.theme.enable %}
  <div class="theme-info">{#
  #}{{ __('footer.theme') }} – {{ next_url('https://theme-next.org', 'NexT.' + theme.scheme, {class: 'theme-link'}) }}{#
  #}{%- if theme.footer.theme.version %} v{{ version }}{%- endif %}{#
#}</div>
{%- endif %}

{{- next_inject('footer') }}

<div class="powered-by">
	<i class="fa fa-user-md"></i>
	<span id="busuanzi_container_site_uv">
	        本站访客数:<span id="busuanzi_value_site_uv"></span>
	</span>
	<span class="post-meta-divider">|</span>
	<span id="busuanzi_container_site_pv">
		本站访问量<span id="busuanzi_value_site_pv"></span>
	</span>
</div>
<div>
<!-- 网站运行时间的设置 -->
<span>已在此守候<span id="showDays"></span></span>
<script>
  var seconds = 1000;
  var minutes = seconds * 60;
  var hours = minutes * 60;
  var days = hours * 24;
  var years = days * 365;
  var birthDay = Date.UTC(2019,08,18,06,12,48); // 这里设置建站时间
  setInterval(function() {
    var today = new Date();
    var todayYear = today.getFullYear();
    var todayMonth = today.getMonth()+1;
    var todayDate = today.getDate();
    var todayHour = today.getHours();
    var todayMinute = today.getMinutes();
    var todaySecond = today.getSeconds();
    var now = Date.UTC(todayYear,todayMonth,todayDate,todayHour,todayMinute,todaySecond);
    var diff = now - birthDay;
    var diffYears = Math.floor(diff/years);
    var diffDays = Math.floor((diff/days)-diffYears*365);
    var diffHours = Math.floor((diff-(diffYears*365+diffDays)*days)/hours);
    var diffMinutes = Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours)/minutes);
    var diffSeconds = Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours-diffMinutes*minutes)/seconds);
      document.getElementById('showDays').innerHTML=""+diffYears+"年"+diffDays+"天"+diffHours+"小时"+diffMinutes+"分钟"+diffSeconds+"秒";
  }, 1000);
</script>

