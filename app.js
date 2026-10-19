const cases = {
  shandao: `
    <div class="case-inner">
      <p class="eyebrow">01 / SHANDAO MOBILITY</p>
      <h2 id="case-title">闪稻出行：<br>让分散的运力，遇见集中的需求。</h2>
      <p class="case-lead">围绕非城区高校的集中出行场景，探索如何通过供需组织与拼车规则，兼顾学生的出行成本、司机的服务效率与平台的持续运行。</p>
      <div class="case-info"><span>我的角色：项目负责人 / 产品经理</span><span>阶段：调研、业务与原型设计，未真实运营</span><span>首个创业项目</span></div>
      <section class="case-section"><h3>01 · 从校门口的问题开始</h3><p>学生需要前往城区返乡、娱乐、办事或就医，但学校周边的公共交通资源有限。我的实地观察是：校门口存在揽客司机占据出行资源、服务体验不佳与人均收费偏高的问题。</p><p>同时，周边存在分散的司机资源；学生在周五、周六、节假日的出行时间与方向又有一定集中性。我据此提出，把局部集中的需求组织起来，再匹配周边运力。</p></section>
      <blockquote class="case-quote">单个学生的需求是零散的；<br>相近的时间、起点与方向，让它们有机会被一起服务。</blockquote>
      <section class="case-section"><h3>02 · 用调研检验需求方向</h3><div class="case-table-wrap"><table class="case-table"><thead><tr><th>调研发现</th><th>对产品设计的启发</th></tr></thead><tbody><tr><td>82.44% 愿意拼车或团购出行</td><td>拼车有接受基础，需继续验证实际下单意愿</td></tr><tr><td>82.82% 认为价格需要改善</td><td>价格是重要诉求，效率改善需要形成真实的价格价值</td></tr><tr><td>80.28% 看重准时，75.5% 看重价格</td><td>不能只追求拼满，也要考虑等待与出发确定性</td></tr></tbody></table></div><p class="case-small">来源：943 份答卷的问卷星报告，Q13、Q23、Q26。样本来自湖北工程职业学院，工业学院占 95.86%，不外推为普遍高校结论。报告中的 AI 摘要与部分图表不一致，此处采用具体题目数据。</p></section>
      <section class="case-section"><h3>03 · 四条业务线，不同的服务取舍</h3><div class="case-table-wrap"><table class="case-table"><thead><tr><th>业务线</th><th>设计方向</th><th>需要验证</th></tr></thead><tbody><tr><td>固定路线套餐</td><td>聚合同方向需求，提供性价比方案</td><td>需求密度、发车时间、价格接受度</td></tr><tr><td>全车女性服务</td><td>司机和乘客均为女性</td><td>女性运力供给、匹配等待与实际需求</td></tr><tr><td>共同下车点拼车</td><td>协商共同下车点，乘客再前往各自目的地</td><td>剩余路程负担与节省费用能否被接受</td></tr><tr><td>豪华独享</td><td>服务重视私密、舒适和自主出发的人群</td><td>细分需求、车辆成本与业务优先级</td></tr></tbody></table></div></section>
      <section class="case-section"><h3>04 · 最重要的判断：共同下车点</h3><p>多终点订单不逐个送达，而是协商一个共同下车点。乘客接受一定的末段步行或换乘，换取更低价格；司机减少绕行，争取提高单位时间的服务效率。</p><p><strong>司机节省的时间，要和乘客完整行程的成本一起考虑。</strong>共同下车点的选择、剩余距离的提前告知，以及用户不接受时的退出方式，都是这套规则需要回答的问题。算法方法与实现程度不作超出材料的描述。</p></section>
      <section class="case-section"><h3>05 · 从业务思考走向产品结构</h3><div class="case-process"><figure><a href="assets/shandao-system.png" target="_blank" rel="noopener"><img src="assets/shandao-system.png" alt="闪稻出行业务结构图，包含用户端、司机端和后台" loading="lazy"></a><figcaption>三端业务结构 · 点击查看原图</figcaption></figure><figure><a href="assets/shandao-prototypes.png" target="_blank" rel="noopener"><img src="assets/shandao-prototypes.png" alt="闪稻出行原型版本与界面流程" loading="lazy"></a><figcaption>设计过程与原型探索 · 点击查看原图</figcaption></figure></div></section>
      <section class="case-section"><h3>06 · 项目边界与我的复盘</h3><p>项目已形成调研、服务业务设计、原型等材料，并取得“校园拼车小程序平台 V1.0”软件著作权登记。尚未真实运营，因此不把等待时间改善、收入与盈利作为已实现结果。</p><p>我希望进一步验证的是：每趟车的学生总付费，能否覆盖司机结算和订单相关成本？司机能否因减少绕行获得更好的每小时收益？学生是否真正降低了包含等待和末段路程的总出行负担？</p><p><strong>这个项目让我把商业化理解为一种持续成立的价值分配，而不只是收费入口。</strong></p></section>
      <div class="case-end"><span>资料：项目路演、问卷报告、软著证书与本人补充说明</span><button class="case-next" data-project="yunzhua">下一个：云爪 <span>↗</span></button></div>
    </div>`,
  yunzhua: `
    <div class="case-inner">
      <p class="eyebrow">02 / YUNZHUA COMMUNITY · 已正式上线</p>
      <h2 id="case-title">云爪：<br>让每一次相遇，成为持续的关心。</h2>
      <p class="case-lead">原名“云养”，正式上线后更名“云爪”。以校园为边界、以动物档案为基础，让学生共同记录动物日常、交流与参与关爱。</p>
      <div class="case-info"><span>我的角色：项目负责人 / 产品经理</span><span>平台：微信小程序</span><span>状态：已上线，手册基本对应上线版本</span></div>
      <section class="case-section"><h3>01 · 已经发生的善意，需要一个共同空间</h3><p>校园里有许多流浪动物，长期生活在不显眼的角落。学生会自发友好投喂，也会关注它们的生活。我据此设计一个针对性很强的校园交流平台，让分散的关注可以被记录、看见和延续。</p><p>产品既承载救助信息，也容纳日常的温暖：孕育、嬉闹、捕食，或一次偶然相遇。社区内容由用户创造。</p></section>
      <blockquote class="case-quote">先让动物被认识，<br>再让围绕它发生的故事被记录和交流。</blockquote>
      <section class="case-section"><h3>02 · 首版取舍：档案优先，社区其次</h3><p>校园是一个相对固定的地理范围，动物档案便于归档、辨认和持续观察。因此，首版优先建立动物档案，其次完善社区内容发布。</p><p>档案呈现昵称、性格、特征、出没地和照片；发布动态时可以提及动物，社区提供日常分享、精选内容和救助信息等入口。这让产品围绕真实的动物与共同经历组织交流。</p><div class="case-gallery"><figure><img src="assets/yunzhua-profile.webp" alt="云爪动物档案界面，展示动物特征、出没地与照片记录" loading="lazy"><figcaption>认识它 · 动物档案</figcaption></figure><figure><img src="assets/yunzhua-feed.webp" alt="云爪首页动态界面，展示用户分享的动物日常" loading="lazy"><figcaption>记录它 · 社区日常</figcaption></figure><figure><img src="assets/yunzhua-publish.webp" alt="云爪发布入口，包含动态、新增成员和救助发布" loading="lazy"><figcaption>参与其中 · 发布入口</figcaption></figure></div><p class="case-small">以上为项目《操作手册》中的界面素材，基本对应上线版本；保留当时“工程云养”的名称。</p></section>
      <section class="case-section"><h3>03 · 让社区运行起来：线上与线下协同</h3><div class="case-table-wrap"><table class="case-table"><thead><tr><th>环节</th><th>我的推动方式</th></tr></thead><tbody><tr><td>组织参与</td><td>发挥大学的组织与呼吁作用，通过团委建立动物友好社团</td></tr><tr><td>形成内容</td><td>组织社团活动，记录校园动物生态与日常</td></tr><tr><td>扩大传播</td><td>通过工作室微信公众号发布平台内的用户优质文章，提高知名度</td></tr><tr><td>观察与调整</td><td>上线后通过公众号进行用户数据整合，结合停留时间、互动频率等反馈微调</td></tr></tbody></table></div><p>对我而言，产品负责人不仅需要定义页面，也要考虑谁愿意参与、内容从哪里来，以及怎样持续获得反馈。</p></section>
      <section class="case-section"><h3>04 · 上线结果与证据边界</h3><blockquote class="case-quote">7 日留存率：22% → 45%<br><small>提高 23 个百分点</small></blockquote><p>据我提供的正式上线后用户统计，7 日留存率由 22% 提升至 45%。统计时间段、样本量及留存定义待进一步补充；微信公众号的阅读互动与小程序行为需要分别说明数据来源，不将留存变化归因于单一功能。</p><p>上线后的实际迭代围绕用户行为反馈展开。项目案例后续将补充具体的“观察—调整—结果”记录，让迭代过程更可追溯。</p></section>
      <section class="case-section"><h3>05 · 我的职责与团队协作</h3><div class="case-table-wrap"><table class="case-table"><thead><tr><th>成员</th><th>负责内容</th></tr></thead><tbody><tr><td>吕家添</td><td>项目负责人、产品经理；产品方向与首版优先级、校园组织协调及传播推动</td></tr><tr><td>李彦</td><td>UI 设计 · 四川农业大学，视觉传达</td></tr><tr><td>林峰</td><td>技术实现 · 福建农林大学，物联网工程</td></tr><tr><td>黄楚楚及工作室成员</td><td>项目运营，黄楚楚担任工作室运营负责人</td></tr></tbody></table></div><p class="case-small">设计、技术与运营成果按团队分工呈现。Logo 使用项目提供的原始素材，其创作归属暂不另作说明。</p></section>
      <section class="case-section"><h3>06 · 我带走的产品思考</h3><p>档案让动物被认识，内容让日常被分享，组织活动让线上交流与实际参与发生联系。这个项目让我更重视：用户持续使用产品的理由，往往与他们关心的人、事物和关系有关。</p><p>未来仍值得检验：内容贡献与实际照护是否得到合理认可，救助信息能否被持续跟进，以及社团成员变化时社区如何延续。</p></section>
      <div class="case-end"><span>资料：操作手册、软件说明、项目 Logo 与本人补充说明</span><button class="case-next" data-project="shandao">另一个视角：闪稻 <span>↗</span></button></div>
    </div>`,
  enterprise: `
    <div class="case-inner">
      <p class="eyebrow">03 / ENTERPRISE EXPERIENCE</p><h2 id="case-title">理解业务复杂性，<br>把需求推进到功能落地。</h2>
      <p class="case-lead">浙江省某数据安全标杆企业 · 实习产品经理<br>2025 年 7 月—9 月</p>
      <div class="case-info"><span>数据安全产品</span><span>需求调研与拆解</span><span>原型 / PRD / 需求评审 / 功能走查</span></div>
      <section class="case-section"><h3>客户需求与业务平衡</h3><p>参与蚂蚁集团网商银行、网易集团等头部客户的需求调研与拆解，涉及数据外发管控的批量化检测设计，考虑安全策略对正常业务效率的影响。参与高频分次外发等功能的设计与落地。</p></section>
      <section class="case-section"><h3>国际化产品需求</h3><p>在英语语种市场，文本与中文的匹配场景不同：空格形成词语边界，词性转换、词形变化与派生词又增加了检索复杂度，沿用常规正则检索容易出现匹配错误。我负责推进相关敏感数据检索优化，输出 PRD、高保真原型，主导需求评审，并与研发、测试对齐边界、完成上线走查。相关功能已实际上线。</p></section>
      <section class="case-section"><h3>AI 应用探索</h3><p>传统 DLP 系统需要频繁构建策略，以识别敏感数据并拦截外发。这为安全运营人员带来持续的前期配置工作。我的产品判断是：在 AI 时代，将大模型能力前置到策略构建环节，辅助安全运营人员更快完成策略配置。该方案以减少配置负担、提升策略构建效率为目标，属于 AI 应用探索。</p></section>
      <p class="case-small">商业信息边界：本页仅陈述问题背景、产品方向与个人职责；具体策略、匹配规则、技术实现与客户数据不予展示。AI 方向未列示量化成效。</p><section class="case-section"><h3>产品表达与交付材料</h3><p>编写中英文产品指南、操作材料，发布 12 个产品最佳实践 Demo，并参与软件著作权相关文档编写。</p><p>这段实习让我接触到真实企业环境中的需求约束，学习把业务语言转成研发、测试能够共同理解和执行的产品方案。</p></section>
      <div class="case-end"><span>根据本人简历整理，未展示客户内部材料与未公开界面。</span><div class="case-resume-links"><a class="text-link" href="assets/呂家添-產品經理%20VC%20.pdf" download="呂家添-產品經理 VC .pdf">中文简历 ↓</a><a class="text-link" href="assets/VC_JiaTianLu(PM)%20.pdf" download>English CV ↓</a></div></div>
    </div>`
};

const dialog = document.querySelector('#case-dialog');
const content = document.querySelector('#case-content');
let previousFocus;
function openCase(id) {
  if (!cases[id]) return;
  if (!dialog.open) previousFocus = document.activeElement;
  content.innerHTML = cases[id];
  if (!dialog.open) dialog.showModal();
  document.body.style.overflow = 'hidden';
  dialog.scrollTop = 0;
  document.querySelector('#close-dialog').focus({preventScroll:true});
}
function closeCase() { dialog.close(); }
document.addEventListener('click', event => {
  const button = event.target.closest('[data-project]');
  if (button) openCase(button.dataset.project);
});
document.querySelector('#close-dialog').addEventListener('click', closeCase);
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeCase();
});
dialog.addEventListener('close', () => {
  document.body.style.overflow = '';
  if (previousFocus?.isConnected) previousFocus.focus({preventScroll:true});
});

let toastTimer;
function notify(message) {
  const toast = document.querySelector('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}
document.querySelector('#copy-email').addEventListener('click', async () => {
  const email = 'jiatianlu20@gmail.com';
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(email);
    } else {
      const input = document.createElement('textarea');
      input.value = email;
      input.style.cssText = 'position:fixed;left:-9999px;top:0';
      document.body.appendChild(input);
      input.select();
      const copied = document.execCommand('copy');
      input.remove();
      if (!copied) throw new Error('Clipboard unavailable');
    }
    notify('邮箱已复制，期待与你交流。');
  } catch {
    notify('请手动复制：' + email);
  }
});

document.querySelector('.mobile-menu-panel').addEventListener('click', event => {
  if (event.target.closest('a')) event.currentTarget.closest('details').open = false;
});

// Respect system motion preferences, with an explicit user control.
const motionToggle = document.querySelector('#motion-toggle');
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
let motionPaused = motionPreference.matches;
function applyMotionPreference() {
  document.body.classList.toggle('motion-paused', motionPaused);
  motionToggle.setAttribute('aria-pressed', String(motionPaused));
  motionToggle.setAttribute('aria-label', motionPaused ? 'Resume motion' : 'Pause motion');
  motionToggle.innerHTML = motionPaused ? '▷ <span>Resume motion</span>' : 'Ⅱ <span>Pause motion</span>';
}
motionToggle.addEventListener('click', () => { motionPaused = !motionPaused; applyMotionPreference(); });
motionPreference.addEventListener('change', event => { motionPaused = event.matches; applyMotionPreference(); });
applyMotionPreference();
let progressPending = false;
function updateProgress() {
  const distance = document.documentElement.scrollHeight - window.innerHeight;
  const fraction = distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0;
  document.querySelector('.reading-progress').style.transform = 'scaleX(' + fraction + ')';
  progressPending = false;
}
window.addEventListener('scroll', () => {
  if (!progressPending) { progressPending = true; requestAnimationFrame(updateProgress); }
}, {passive:true});
window.addEventListener('resize', updateProgress);
updateProgress();

// V3 interaction layer: sticky glass nav, slow reveal choreography, and low-cost parallax.
const siteHeader = document.querySelector('.site-header');
const heroOpening = document.querySelector('.hero-opening');
let uiFrame = false;
function updateScrollUI() {
  const threshold = Math.max(420, window.innerHeight * .7);
  siteHeader.classList.toggle('nav-scrolled', window.scrollY > threshold);
  if (heroOpening) {
    const rect = heroOpening.getBoundingClientRect();
    const progress = Math.min(1, Math.max(0, -rect.top / Math.max(1, rect.height - window.innerHeight)));
    heroOpening.style.setProperty('--hero-scroll', (progress * 34).toFixed(2) + 'px');
  }
  uiFrame = false;
}
window.addEventListener('scroll', () => {
  if (!uiFrame) { uiFrame = true; requestAnimationFrame(updateScrollUI); }
}, {passive:true});
window.addEventListener('resize', updateScrollUI);
updateScrollUI();

const revealSets = [
  ['.internship-panel', .18],
  ['.experience-item', .14],
  ['.delivery-metrics', .34],
  ['.project-card', .18],
  ['.source-note', .42],
  ['.thinking-note', .35],
  ['.about-copy', .2],
  ['.resume-file', .18],
  ['.contact-actions', .28]
];
revealSets.forEach(([selector,step]) => {
  document.querySelectorAll(selector).forEach((element,index) => {
    element.classList.add('scroll-reveal');
    element.style.setProperty('--delay', (index * step + .18).toFixed(2) + 's');
  });
});
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      if (!entry.target.matches('.hero-opening')) revealObserver.unobserve(entry.target);
    }
  });
}, {threshold:.14, rootMargin:'0px 0px -8% 0px'});
document.querySelectorAll('.scroll-section, .scroll-reveal').forEach(element => revealObserver.observe(element));

if (heroOpening && !motionPreference.matches) {
  let pointerFrame = false;
  heroOpening.addEventListener('pointermove', event => {
    if (pointerFrame) return;
    pointerFrame = true;
    requestAnimationFrame(() => {
      const bounds = heroOpening.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - .5) * 18;
      const y = ((event.clientY - bounds.top) / bounds.height - .5) * 12;
      heroOpening.style.setProperty('--pointer-x', x.toFixed(2));
      heroOpening.style.setProperty('--pointer-y', y.toFixed(2));
      pointerFrame = false;
    });
  }, {passive:true});
  heroOpening.addEventListener('pointerleave', () => {
    heroOpening.style.setProperty('--pointer-x','0');
    heroOpening.style.setProperty('--pointer-y','0');
  }, {passive:true});
}

document.querySelectorAll('.mobile-menu-panel a').forEach(link => link.addEventListener('click', () => {
  link.closest('details').open = false;
}));
