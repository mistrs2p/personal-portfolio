import type { Project } from "@/data/projects";

type ProjectCopy = Partial<
    Pick<
        Project,
        | "title"
        | "category"
        | "tagline"
        | "description"
        | "role"
        | "scope"
        | "problem"
        | "solution"
        | "technologies"
        | "features"
        | "architecture"
        | "engineeringDecisions"
        | "challenges"
    >
> & {
    caseStudy?: {
        context?: string;
        workflow?: string[];
        highlights?: string[];
        formArchitecture?: {
            summary?: string;
            layers: { title: string; description: string }[];
            capabilities: string[];
        };
    };
};

const fa: Record<string, ProjectCopy> = {
    neco: {
        category: "مدیریت پروژه و فرآیند سازمانی",
        tagline: "اپلیکیشن Client برای گردش‌کارهای پیچیده پروژه‌های صنعتی",
        description:
            "یک پلتفرم سازمانی در مقیاس بزرگ که توسط سازمان‌های صنعتی برای برنامه‌ریزی، اجرا، پایش و کنترل پروژه‌ها و فرآیندهای عملیاتی پیچیده استفاده می‌شود.",
        role:
            "توسعه‌دهنده فرانت‌اند مسئول توسعه، تکامل، نگهداری و استقرار پروداکشن اپلیکیشن Neco Client.",
        scope:
            "اپلیکیشن Client از اجرای پروژه و گردش‌کارهای عملیاتی شامل طراحی برنامه، مدیریت وظایف و مسائل، فرم‌های پویا، بررسی‌های مبتنی بر گردش‌کار، جلسات، نامه‌ها، عملیات Kanban، جستجو و تحلیل پیشرفته داده و تعاملات مبتنی بر AI پشتیبانی می‌کند.",
        problem:
            "اپلیکیشن Client باید فرآیندهای پیچیده کسب‌وکار شامل برنامه‌ریزی سلسله‌مراتبی، برنامه‌های وزن‌دهی‌شده، فرم‌های پویا، گردش‌کارهای چندمرحله‌ای، تأییدها، اجرای وظایف و حجم زیادی از داده‌های عملیاتی را مدیریت می‌کرد.",
        solution:
            "یک فرانت‌اند ساختاریافته مبتنی بر React با کامپوننت‌های قابل استفاده مجدد، فرم‌های metadata-driven، ارتباط API مبتنی بر Repository، جداول server-side، مدیریت state آگاه از workflow، جستجو و فیلتر پیشرفته و تعاملات یکپارچه AI.",
        caseStudy: {
            context:
                "Neco برای دنبال کردن پروژه‌های صنعتی از برنامه‌ریزی اولیه و تعریف برنامه تا اجرا، تأییدها، فعالیت‌های عملیاتی و تکمیل پروژه استفاده می‌شود.",
            workflow: [
                "تعریف پروژه‌ها و برنامه‌ها",
                "طراحی ساختار سلسله‌مراتبی برنامه و تعیین وزن‌ها",
                "انتقال برنامه‌ها به مرحله اجرا",
                "ایجاد مسئله، وظیفه، جلسه، نامه و فرم",
                "تعیین گردش‌کار و افراد مسئول",
                "تکمیل و اعتبارسنجی فرم‌های پویا",
                "بررسی، تأیید، رد یا درخواست اصلاح",
                "ارجاع، تخصیص مجدد یا ایجاد پیگیری",
                "پایش اجرا از طریق جدول‌ها، Kanban، تقویم و سایر رابط‌های عملیاتی",
            ],
            highlights: [
                "توسعه فرانت‌اند اپلیکیشن Client و تحویل پروداکشن",
                "مهاجرت Vue.js به React با Vite",
                "Form Generator سازمانی مبتنی بر metadata",
                "لایه ارتباطی API مبتنی بر Repository",
                "AG Grid با عملیات server-side",
                "تجربه جستجو و فیلتر پیشرفته",
                "Program Designer",
                "رابط‌های task و form آگاه از workflow",
                "Kanban مبتنی بر منطق کسب‌وکار",
                "عملیات فرم مبتنی بر AI",
            ],
            formArchitecture: {
                summary:
                    "زیرساخت فرم مبتنی بر metadata که در سراسر Client برای نمایش فرم‌های پویا و حفظ هماهنگی تعریف فیلد، وضعیت entity، اعتبارسنجی و رفتار UI در چرخه عمر فرم استفاده می‌شود.",
                layers: [
                    { title: "تعریف فرم", description: "ساختار و metadata فرم و فیلدهای آن را تعریف می‌کند." },
                    { title: "EntityField", description: "metadata مربوط به هر فیلد را برای تعیین نحوه نمایش و رفتار در اختیار Client قرار می‌دهد." },
                    { title: "EntityValue", description: "تعریف فیلد را به مقدار واقعی entity یا نمونه فرم فعلی متصل می‌کند." },
                    { title: "نمایش پویا", description: "فرانت‌اند بر اساس metadata فیلد و context فعلی، کنترل و تنظیمات مناسب را انتخاب می‌کند." },
                    { title: "اعتبارسنجی و وضعیت", description: "قوانینی مانند required، read-only و سایر محدودیت‌های وضعیت و اعتبارسنجی به‌صورت یکپارچه اعمال می‌شوند." },
                    { title: "Submit و اتصال API", description: "وضعیت فرم اعتبارسنجی شده و از طریق لایه Repository و Service به APIهای بک‌اند ارسال می‌شود." },
                ],
                capabilities: [
                    "نمایش فیلد مبتنی بر metadata",
                    "اعمال فیلدهای اجباری",
                    "اعمال وضعیت فقط‌خواندنی",
                    "اعتبارسنجی وابسته به context",
                    "انتخاب پویا نوع کنترل",
                    "مدیریت field/value مبتنی بر entity",
                    "زیرساخت فرم قابل استفاده مجدد",
                    "اتصال API مبتنی بر Repository",
                ],
            },
        },
        technologies: ["React","Vue.js","TypeScript","Vite","Mantine","AG Grid","REST API","یکپارچه‌سازی AI","Localization"],
        features: ["Program Designer","مدیریت وظیفه و پیگیری","مدیریت مسئله","فرم‌های مبتنی بر Workflow","Form Generator سفارشی","فرم‌های پویا","عملیات فرم","تقویم","نامه‌ها","جلسات","Kanban","جستجو و فیلتر پیشرفته","عملیات مبتنی بر AI","Localization"],
        architecture: ["React + Vite Client Application","Repository Pattern","Service Layer","معماری فرم مبتنی بر Metadata","معماری کامپوننت قابل استفاده مجدد","عملیات داده Server-side","UI State آگاه از Workflow"],
        engineeringDecisions: ["پیشنهاد و هدایت مهاجرت Vue.js به React","انتخاب Vite برای build و development","طراحی Form Generator قابل استفاده مجدد و metadata-driven","پیاده‌سازی لایه ارتباطی API مبتنی بر Repository","پیاده‌سازی عملیات server-side در AG Grid","ساخت abstractionهای قابل استفاده مجدد برای کنترل‌های تکراری","پیاده‌سازی rendering آگاه از workflow بر اساس metadata وظیفه از بک‌اند","یکپارچه‌سازی تعاملات AI در عملیات فرم"],
        challenges: ["نمایش گردش‌کارهای پیچیده کسب‌وکار در Client","قابل استفاده مجدد نگه داشتن فرم‌های پویا با پشتیبانی از state و validationهای مختلف","مدیریت جدول‌های سازمانی بزرگ و داده‌محور","حفظ یکپارچگی میان ماژول‌های متعدد کسب‌وکار","مدیریت UI State بر اساس metadata گردش‌کار از بک‌اند"],
    },
    pomodoro: {
        category: "محصول فول‌استک",
        tagline: "یک فضای بهره‌وری فول‌استک برای جلسات کاری متمرکز",
        description:
            "یک اپلیکیشن بهره‌وری فول‌استک برای جلسات کاری متمرکز، تایمر Pomodoro مبتنی بر task، پروفایل‌های قابل تنظیم، آمار بهره‌وری و مدیریت امن حساب کاربری.",
        role:
            "توسعه‌دهنده فول‌استک مسئول طراحی و پیاده‌سازی end-to-end اپلیکیشن در فرانت‌اند Next.js و بک‌اند NestJS.",
        scope:
            "یک فضای بهره‌وری برای کاربر که جلسات متمرکز، مدیریت task، پروفایل‌های focus، تحلیل پیشرفت، احراز هویت، ورود اجتماعی و امنیت دومرحله‌ای را ترکیب می‌کند.",
        problem:
            "این پروژه برای بررسی یک workflow عملی بهره‌وری حول جلسات متمرکز ایجاد شد و هم‌زمان محیطی واقعی برای پیاده‌سازی احراز هویت، امنیت، persistence، state management و ساختار نرم‌افزاری production-oriented فراهم کرد.",
        solution:
            "یک فرانت‌اند Next.js و REST API با NestJS و PostgreSQL که تایمر persistent، task و session وابسته به کاربر، پروفایل‌های قابل تنظیم، آمار، احراز هویت امن مبتنی بر cookie، social login و احراز هویت دومرحله‌ای TOTP را ترکیب می‌کند.",
        caseStudy: {
            context:
                "اولین قابلیت محصول یک تایمر تمرکز مبتنی بر Pomodoro است و مسیر کلی پروژه، تبدیل شدن به یک workspace عملی برای کار متمرکز و پایش بهره‌وری است.",
            workflow: [
                "ساخت حساب یا ورود با email/password، Google یا GitHub",
                "انتخاب یا تنظیم پروفایل focus",
                "ساخت و انتخاب task برای جلسه تمرکز",
                "شروع یک جلسه Pomodoro پایدار",
                "توقف موقت، ادامه، reset یا بازیابی جلسه پس از refresh",
                "ثبت جلسات تکمیل‌شده برای کاربر و task مربوطه",
                "پایش آمار روزانه و هفتگی و streak",
                "بررسی تحلیل‌های بهره‌وری بر اساس پروفایل",
            ],
            highlights: [
                "پیاده‌سازی end-to-end فول‌استک",
                "فرانت‌اند Next.js با React و TypeScript",
                "REST API با NestJS",
                "Persistence با PostgreSQL و TypeORM",
                "احراز هویت email/password",
                "Google و GitHub OAuth",
                "JWT در cookieهای httpOnly",
                "احراز هویت دومرحله‌ای مبتنی بر TOTP",
                "تایمر Pomodoro پایدار و مقاوم در برابر refresh",
                "ذخیره idempotent جلسات focus",
                "پروفایل‌های focus قابل تنظیم",
                "تحلیل بهره‌وری روزانه و هفتگی",
                "تست خودکار بک‌اند",
            ],
        },
        features: ["Pomodoro Focus Timer","مدیریت Task","Focus Profiles","پروفایل‌های Classic / Quick Focus / Deep Work","پروفایل سفارشی","آمار روزانه","آمار هفتگی","Focus Streaks","بهترین ساعت تمرکز","تحلیل بر اساس پروفایل","احراز هویت Email / Password","Google OAuth","GitHub OAuth","احراز هویت دومرحله‌ای","پشتیبانی از Authenticator App","بازیابی Session پایدار","رابط انگلیسی / فارسی","پشتیبانی RTL / LTR","تم روشن / تاریک"],
        architecture: ["Frontend اختصاصی Next.js","Backend اختصاصی NestJS","REST API Architecture","PostgreSQL + TypeORM","ساختار ماژولار NestJS","JWT Authentication مبتنی بر Cookie","استراتژی‌های Google / GitHub OAuth","TOTP Two-Factor Authentication","ماشین حالت تایمر Client-side پایدار","Versioned Database Migrations","محیط توسعه PostgreSQL با Docker"],
        engineeringDecisions: ["جدا کردن frontend و backend در repositoryهای مستقل","استفاده از cookieهای امن httpOnly برای tokenهای احراز هویت","نگه نداشتن مدیریت JWT در state فرانت‌اند","پیاده‌سازی challenge کوتاه‌مدت 2FA پیش از صدور session نهایی","ذخیره timestamp مطلق پایان تایمر برای مقاومت در برابر refresh","استفاده از session identifier پایدار برای idempotent بودن تکمیل session","ثبت snapshot غیرقابل تغییر از focus profile هنگام ذخیره session","محدود کردن task، session و profile به کاربر احراز‌شده","غیرفعال کردن schema synchronization در TypeORM و استفاده از migrationهای نسخه‌دار","افزودن تست خودکار backend با Jest و Supertest"],
        challenges: ["دقیق و قابل بازیابی نگه داشتن تایمر پس از refresh و قطع شدن session مرورگر","طراحی جریان امن احراز هویت با password، OAuth و 2FA","جلوگیری از ذخیره تکراری هنگام retry درخواست تکمیل session","حفظ مرز مالکیت کاربر برای taskها، profileها و sessionها","پشتیبانی از ریتم‌های focus قابل تنظیم بدون تغییر profile در session فعال"],
    },
    ketabdaneh: {
        category: "فول‌استک / سیستم‌ها",
        tagline: "سیستم مدیریت عملیات شعبه",
        description:
            "یک سیستم در حال توسعه برای مدیریت عملیات شعبه که افراد، رویدادها، مسئولیت‌ها، زمان‌بندی و دید عملیاتی را برای مدیر شعبه سازمان‌دهی می‌کند.",
        role:
            "توسعه‌دهنده فول‌استک مسئول طراحی و پیاده‌سازی اپلیکیشن در فرانت‌اند Next.js، بک‌اند FastAPI، دیتابیس، سرویس‌های پس‌زمینه، stack استقرار و زیرساخت مهندسی.",
        scope:
            "یک workspace عملیاتی حول افراد، رویدادها، تخصیص مسئولیت، تقویم، احراز هویت، کنترل دسترسی مبتنی بر نقش و دید مدیریتی؛ برخی ماژول‌های عملیاتی دیگر همچنان در حال توسعه هستند.",
        problem:
            "مدیر شعبه باید بدون پیگیری مداوم افراد، دید مناسبی نسبت به رویدادها، مسئولیت‌ها، تخصیص‌ها و وضعیت عملیات داشته باشد. این سیستم برای منظم‌تر و قابل پیش‌بینی‌تر کردن عملیات شعبه، به‌ویژه در زمان نبود فیزیکی مدیر، در حال توسعه است.",
        solution:
            "یک اپلیکیشن فول‌استک ماژولار که افراد، رویدادها، تخصیص‌ها و زمان‌بندی را پشت یک فرانت‌اند Next.js و API با FastAPI متمرکز می‌کند و با PostgreSQL و زیرساخت production-oriented برای احراز هویت، authorization، jobهای پس‌زمینه، اعلان‌ها، observability، backup و deployment verification کار می‌کند.",
        caseStudy: {
            context:
                "Ketabdaneh یک سیستم مدیریت عملیات برای یک شعبه است. MVP فعلی روی ایجاد رویداد، تخصیص افراد به مسئولیت‌های رویداد، نمایش رویدادهای زمان‌بندی‌شده در تقویم و ارائه یک دید عملیاتی یکپارچه برای مدیر متمرکز است.",
            workflow: ["ایجاد رویداد","زمان‌بندی رویداد","تخصیص یک یا چند نفر به مسئولیت‌های رویداد","نگه داشتن تخصیص‌ها در وضعیت انتظار تأیید","نمایش رویدادهای برنامه‌ریزی‌شده در تقویم هفتگی","ارائه نمای یکپارچه از افراد، رویدادها و تخصیص‌ها به مدیر"],
            highlights: ["پیاده‌سازی end-to-end فول‌استک","فرانت‌اند Next.js + TypeScript","بک‌اند FastAPI + Python","معماری Modular Monolith","Persistence با PostgreSQL و SQLAlchemy","Migrationهای دیتابیس با Alembic","JWT Authentication با RBAC سمت سرور","لایه typed برای ارتباط API فرانت‌اند","Workflow رویداد و تخصیص","زمان‌بندی در تقویم هفتگی","ارسال اعلان پس‌زمینه با Redis","Providerهای اعلان Telegram و Bale","Health Check و Metrics سازگار با Prometheus","معماری استقرار Docker + Caddy","ابزار Backup و Restore","CI/CD و Security Automation","رابط انگلیسی / فارسی با پشتیبانی RTL/LTR"],
        },
        features: ["احراز هویت","کنترل دسترسی مبتنی بر نقش","مدیریت افراد","نقش‌های افراد","مدیریت رویداد","تخصیص رویداد","وضعیت تأیید تخصیص","تقویم هفتگی","داشبورد مدیر","زیرساخت اعلان","Provider تلگرام","Provider بله","Background Job Worker","Health Checks","Metrics","Backup & Restore","رابط انگلیسی / فارسی","RTL / LTR","تم روشن / تاریک"],
        architecture: ["Frontend با Next.js + TypeScript","Backend با FastAPI + Python","Modular Monolith","REST / HTTP JSON Boundary","PostgreSQL + SQLAlchemy","Alembic Versioned Migrations","Redis + ARQ Background Worker","لایه Notification مستقل از Provider","Caddy Reverse Proxy","Dockerized Deployment Stack","سطوح داخلی Database، Redis، API و Metrics"],
        engineeringDecisions: ["انتخاب Modular Monolith به‌جای microservices برای تناسب پیچیدگی عملیاتی با یک سیستم تک‌شعبه‌ای","قرار دادن business rule، authorization و state transition در backend به‌عنوان source of truth","جدا کردن frontend و backend با یک مرز typed HTTP/JSON","مرکزی کردن ارتباط API فرانت‌اند در یک client مشترک و moduleهای domain-specific","استفاده از JWT Bearer و RBAC سمت سرور به‌جای اعتماد به role در client","طراحی notification پشت abstraction برای قابل تعویض بودن Telegram و Bale","انتقال notification delivery به worker مبتنی بر Redis با retry محدود و exponential backoff","افزودن readiness و liveness check مستقل از authentication","داخلی نگه داشتن Prometheus metrics در شبکه Docker","قرار دادن Caddy به‌عنوان تنها سرویس public و داخلی نگه داشتن سرویس‌های application و data","افزودن ابزار backup و restore و تمرین restore روی دیتابیس موقت","افزودن CI برای backend، frontend، Docker و security","اعمال fail-closed configuration برای secrets، CORS، database و Redis"],
        challenges: ["مدل‌سازی domain عملیاتی در حالی که بخشی از business ruleها هنوز در حال کشف هستند","متمرکز نگه داشتن authorization و state transitionها در backend","مدل‌سازی event assignment به‌عنوان مفهومی مستقل از نقش سازمانی دائمی فرد","ساخت notification infrastructure بدون وابستگی requestهای کسب‌وکار به providerهای شبکه","طراحی deployment با جداسازی روشن سطوح public و internal","پشتیبانی از رابط فارسی / انگلیسی و رفتار RTL / LTR"],
    },
    "ai-chat": {
        category: "هوش مصنوعی / LLM",
        tagline: "رابط چت AI استریم‌شونده با OpenRouter",
        description:
            "یک اپلیکیشن متمرکز AI Chat با Next.js، React، TypeScript، Zustand و Vercel AI SDK که OpenRouter را به‌عنوان gateway مدل و Gemini 2.5 Flash را برای پاسخ‌های استریم‌شونده استفاده می‌کند.",
        role:
            "توسعه‌دهنده فول‌استک مسئول طراحی و پیاده‌سازی UI، state مکالمه در client، جریان‌های مدیریت چت، مدیریت پاسخ‌های streaming و یکپارچه‌سازی LLM در server.",
        scope:
            "یک workspace سبک برای مکالمه با چند گفت‌وگوی محلی persistent، context چندمرحله‌ای، پاسخ‌های streaming، نمایش Markdown، ویرایش و regeneration پیام، مدیریت چت و sidebar واکنش‌گرا.",
        problem:
            "یک رابط AI باید سریع و روان باشد، در حالی که credential مدل خارج از browser باقی بماند، context مکالمه حفظ شود و کاربر کنترل مناسبی روی مکالمات و پاسخ‌های تولیدشده داشته باشد.",
        solution:
            "یک اپلیکیشن Next.js با Zustand persistent، API route سمت server با Vercel AI SDK، OpenRouter به‌عنوان model gateway، پاسخ متنی streaming، Markdown rendering و کنترل‌های client برای ایجاد، rename، حذف، ویرایش، regeneration و لغو generation.",
        caseStudy: {
            context:
                "این پروژه روی چرخه اصلی تعامل با یک دستیار AI تمرکز دارد و هم‌زمان مسائل state management و UX در یک اپلیکیشن چندمکالمه‌ای را بررسی می‌کند: history پایدار، context چندمرحله‌ای، streaming، regeneration، editing و کنترل generation.",
            workflow: ["ایجاد چت جدید یا ادامه یک مکالمه محلی","وارد کردن prompt","ارسال prompt و history مکالمه به API route","ارسال درخواست به OpenRouter با مدل تنظیم‌شده","stream کردن پاسخ تولیدشده به browser","به‌روزرسانی تدریجی پیام assistant با رسیدن chunkها","توقف generation در صورت نیاز و حفظ پاسخ دریافت‌شده","نمایش پاسخ assistant به‌صورت Markdown","rename یا حذف مکالمه از sidebar","ویرایش پیام قبلی و regeneration مکالمه از همان نقطه","regenerate کردن آخرین پاسخ assistant"],
            highlights: ["Next.js App Router","React + TypeScript","Vercel AI SDK streaming","OpenRouter Model Gateway","Gemini 2.5 Flash","Zustand Conversation State","Persistent Local Chat History","Multi-turn Conversation Context","چند Chat Session محلی","جریان Edit Message و Regenerate","Regenerate Response","Stop Generation با AbortController","Markdown Rendering","Sidebar واکنش‌گرا و قابل collapse","Modal برای Rename و Delete"],
        },
        features: ["AI Chat","Streaming Responses","Multi-turn Conversation Context","Persistent Chat History","Multiple Conversations","Conversation Sidebar","New Chat","Rename Chat","Delete Chat","Edit User Message","Save & Regenerate","Regenerate Response","Stop Generation","Markdown Rendering","Incremental Assistant Updates","Responsive Sidebar","Server-side API Route"],
        architecture: ["Next.js App Router","Client-side Zustand Store","Persisted Local Conversation State","Next.js Route Handler","Vercel AI SDK","OpenRouter API Gateway","Gemini 2.5 Flash Model","Streaming Text Response","لغو generation مبتنی بر AbortController"],
        engineeringDecisions: ["نگه داشتن OpenRouter API key روی server با integration از طریق Next.js route handler","استفاده از streamText در Vercel AI SDK برای ارائه خروجی به‌صورت text stream","ارسال پیام‌های قبلی در هر request برای حفظ context چندمرحله‌ای","به‌روزرسانی تدریجی پیام assistant به‌جای انتظار برای پاسخ کامل","استفاده از AbortController برای توقف generation بدون حذف پاسخ partial","جدا کردن conversation state از UI با Zustand persistent","ذخیره chatها و active conversation در local storage برای حفظ continuity پس از refresh","امکان edit و regenerate پیام‌های کاربر و truncate کردن conversation بعد از نقطه ویرایش","استفاده از typeهای مشخص TypeScript برای chat، message و role","استفاده از Markdown rendering برای حفظ قالب‌بندی خروجی AI","جایگزینی prompt/confirm مرورگر با modalهای داخل application","استفاده از OpenRouter gateway مستقل برای کاهش coupling رابط کاربری به provider"],
        challenges: ["ارائه تعامل streaming به‌جای انتظار برای پاسخ کامل مدل","خارج نگه داشتن credentialهای مدل از browser","حفظ context منسجم چندمرحله‌ای در چند conversation محلی","هماهنگ کردن محتوای streaming assistant با conversation فعال و persistent","توقف generation در حالی که پاسخ دریافت‌شده حفظ شود","ویرایش پیام قبلی بدون خراب شدن history مکالمه","مدیریت چند chat بدون پیچیده کردن رابط کاربری"],
    },
};

export function getLocalizedProject(project: Project, language: string): Project {
    if (!language.startsWith("fa")) {
        return project;
    }

    const copy = fa[project.slug];

    if (!copy) {
        return project;
    }

    return {
        ...project,
        ...copy,
        caseStudy: project.caseStudy
            ? {
                  ...project.caseStudy,
                  ...copy.caseStudy,
                  formArchitecture: project.caseStudy.formArchitecture
                      ? {
                            ...project.caseStudy.formArchitecture,
                            ...copy.caseStudy?.formArchitecture,
                        }
                      : copy.caseStudy?.formArchitecture,
              }
            : copy.caseStudy,
    };
}
