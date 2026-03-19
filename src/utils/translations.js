export const translations = {
    zh: {
        // App Name
        appName: "AI奇妙-学习辅导平台",

        // Navigation
        nav: {
            home: "主页",
            homework: "我的作业",
            statistics: "学习统计",
            settings: "设置",
            faq: "常见问题",
            detail: "作业详情",
            new: "新建作业",
            login: "登录",
            register: "注册",
            profile: "个人资料",
            logout: "退出登录",
            backHome: "返回主页",
            personalSettings: "个人设置"
        },

        // Subjects
        subjects: {
            math: "数学",
            physics: "物理",
            chemistry: "化学",
            chinese: "语文",
            english: "英语",
            biology: "生物",
            history: "历史",
            geography: "地理",
            general: "通用"
        },

        // Sidebar
        sidebar: {
            recent: "最近活动",
            untitled: "未命名会话",
            downloadApp: "下载 App",
            androidClient: "Android 客户端",
            usage: "作业用量",
            nearLimit: "即将满额",
            loading: "加载中..."
        },

        // Header
        header: {
            freePlan: "免费计划",
            darkMode: "深色模式",
            rank: "解题能手",
            totalHomework: "题总量"
        },

        // Auth
        auth: {
            loginTitle: "欢迎回来",
            loginSubtitle: "登录您的账户以继续",
            emailLabel: "电子邮箱",
            passwordLabel: "密码",
            forgotPassword: "忘记密码？",
            loginButton: "登录",
            registerLink: "还没有账户？立即注册",
            registerTitle: "创建账户",
            registerSubtitle: "开始您的智能学习之旅",
            confirmPasswordLabel: "确认密码",
            registerButton: "注册",
            loginLink: "已有账户？立即登录",
            resetPasswordTitle: "重置密码",
            resetPasswordSubtitle: "输入您的邮箱以接收重置链接",
            sendLinkButton: "发送重置链接",
            backToLogin: "返回登录"
        },

        // Dashboard
        dashboard: {
            welcome: "欢迎回来，{{name}}",
            startLearning: "开始今天的学习吧",
            uploadTitle: "拍照/上传作业",
            uploadDesc: "支持图片、PDF、Word文档，AI智能批改讲解",
            uploadButton: "点击上传",
            dragDrop: "或拖拽文件到此处",
            recentActivity: "最近活动",
            viewAll: "查看全部",
            newSession: "新建会话",
            noActivity: "暂无活动"
        },

        // Common
        common: {
            loading: "加载中...",
            success: "成功",
            error: "错误",
            save: "保存",
            cancel: "取消",
            delete: "删除",
            edit: "编辑",
            confirm: "确认",
            student: "同学",
            clear: "清除",
            selectAll: "全选"
        },

        // History
        history: {
            totalSessions: "共 {{count}} 个会话",
            noSessions: "还没有作业会话",
            selected: "已选择 {{count}} 个",
            subject: "学科",
            knowledgePoints: "知识点",
            searchPlaceholder: "搜索会话...",
            export: "导出",
            exporting: "导出中...",
            deleting: "删除中...",
            selectToExport: "请先选择要导出的会话",
            exportSuccess: "✅ 成功导出 {{count}} 个会话为 {{format}} 格式！",
            wordSaved: "📄 Word 文档已保存到您的下载文件夹。",
            wordTip: "💡 提示：可以使用 Microsoft Word 或 WPS 打开编辑。",
            pdfSaved: "📕 PDF 文件已保存到您的下载文件夹。",
            pdfTip: "💡 提示：可以直接打开查看或打印，适合分享给老师和家长。",
            markdownSaved: "📁 已下载 {{count}} 个 Markdown 文件到您的下载文件夹。",
            markdownTip: "💡 提示：如果浏览器询问，请允许多个文件下载。",
            fileSaved: "📁 文件已保存到您的下载文件夹。",
            exportFailed: "❌ 导出失败：",
            deleteConfirm: "确定要删除选中的 {{count}} 个作业吗？此操作无法撤销。",
            deleteSuccess: "删除成功！",
            deleteFailed: "删除失败：",
            filterBySubject: "（仅显示已选学科的知识点）",
            selectFormat: "选择导出格式",
            wordDoc: "Word 文档",
            recommended: "推荐",
            editable: "可编辑 · 易打印",
            singleOnly: "仅支持单个会话",
            txtText: "TXT 文本",
            plainText: "纯文本 · 完美中文",
            jsonData: "JSON 数据",
            structured: "结构化 · 批量支持",
            markdownDoc: "Markdown 文档",
            plainTextBatch: "纯文本 · 批量支持",
            selectTip: "💡 勾选会话以批量操作",
            loading: "加载中...",
            untitled: "未命名会话",
            view: "查看",
            noSessionsFound: "未找到会话",
            tryOtherKeywords: "试试其他搜索词",
            noSessionsYet: "还没有作业会话",
            startFromDashboard: "从主页开始上传作业题目",
            timeAgo: {
                yearsAgo: "{{count}} 年前",
                monthsAgo: "{{count}} 个月前",
                daysAgo: "{{count}} 天前",
                hoursAgo: "{{count}} 小时前",
                minutesAgo: "{{count}} 分钟前",
                justNow: "刚刚"
            }
        },

        // Statistics
        statistics: {
            title: "学习统计",
            subtitle: "记录你的成长轨迹，见证每一次进步",
            totalSessions: "累积作业总数",
            totalTime: "累计学习时长",
            totalKnowledgePoints: "累积知识点数",
            streak: "连续学习天数",
            subjectDistribution: "学科分布",
            noSubjectData: "暂无学科数据",
            hotKnowledgePoints: "热门知识点",
            noKnowledgePoints: "随着作业分析的增加，这里将展示你的知识点图谱",
            achievements: "成就徽章",
            unlock: "完成作业解锁成就",
            keepGoing: "继续加油！",
            startFirst: "开始你的第一次学习吧！",
            keepItUp: "你已经迈出了第一步，继续保持！",
            accumulating: "你的努力正在积累，坚持就是胜利！",
            master: "你真是一个学习达人，继续保持这份热情！"
        },

        // Settings & Profile
        settings: {
            security: "安全设置",
            newPassword: "新密码",
            confirmPassword: "确认新密码",
            changePassword: "修改密码",
            updating: "更新中...",
            passwordLengthError: "密码长度至少需要6位",
            passwordMismatchError: "两次输入的密码不一致",
            passwordSuccess: "密码已成功修改！",
            passwordError: "修改失败，请重试",
        },
        profile: {
            title: "个人资料",
            subtitle: "管理你的个人信息与账户安全",
            editTitle: "编辑资料",
            noNickname: "未设置昵称",
            noGrade: "未设置年级",
            bioTitle: "个人简介",
            defaultBio: "这个人很懒，什么都没写...",
            avatarSettings: "头像设置",
            chooseAvatarStyle: "选择你喜欢的头像风格：",
            nickname: "昵称",
            grade: "年级/学段",
            selectGrade: "请选择年级",
            school: "学校",
            bio: "个人简介",
            grades: {
                primary1: "小学一年级",
                primary2: "小学二年级",
                primary3: "小学三年级",
                primary4: "小学四年级",
                primary5: "小学五年级",
                primary6: "小学六年级",
                middle7: "初中一年级",
                middle8: "初中二年级",
                middle9: "初中三年级",
                high10: "高中一年级",
                high11: "高中二年级",
                high12: "高中三年级",
                university: "大学本科",
                graduate: "研究生",
                adult: "成人/社会"
            }
        },

        // FAQ
        faq: {
            title: "常见问题解答",
            subtitle: "关于AI奇妙的一切你想知道的",
            stillHaveQuestions: "还有其他问题？",
            helpText: "我们随时准备帮助你。开始使用AI奇妙，体验智能学习的乐趣！",
            startUsing: "开始使用",
            q1: "AI奇妙是如何工作的？",
            a1: "AI奇妙采用先进的人工智能技术和苏格拉底式教学法，通过提问引导你思考，而不是直接给出答案。你可以输入问题或上传图片，AI会分析题目并通过一系列引导性问题帮助你理解解题思路。",
            q2: "使用AI奇妙需要付费吗？",
            a2: "目前AI奇妙完全免费使用。你只需要注册一个账号，就可以享受所有功能，包括全学科辅导、图片识别、学习统计等。我们致力于让每个学生都能获得优质的学习辅导。",
            q3: "支持哪些学科的学习辅导？",
            a3: "系统支持数学、语文、英语、物理、化学、生物、历史、地理、政治等全学科的学习辅导。无论是理科还是文科，从小学到高中，我们都能提供专业的学习指导。",
            q4: "AI会直接给我答案吗？",
            a4: "不会。我们采用苏格拉底式教学法，通过提问引导你思考，帮助你自己找到答案。这种方法能够培养你的独立思考能力和解决问题的能力，让你真正理解知识，而不是简单地记住答案。",
            q5: "解答的准确性如何？",
            a5: "我们的AI系统基于先进的深度学习模型，经过大量教育数据训练，能够提供高度准确的分析和引导。但我们建议将其作为学习辅助工具，培养独立思考能力，而不是完全依赖。",
            q6: "如何获得更好的使用体验？",
            a6: "建议在提问时提供清晰的问题描述或高质量的图片。如果是数学题，可以说明具体的知识点；如果是文科题目，可以提供更多背景信息。同时，积极参与AI的引导性提问，会获得更好的学习效果。",
            features: {
                guided: "引导式学习",
                guidedDesc: "培养独立思考能力",
                fullSubject: "全学科覆盖",
                fullSubjectDesc: "从小学到高中全覆盖",
                stats: "学习统计",
                statsDesc: "可视化学习进度"
            },

            // Dashboard Features & Steps
            dashboardFeature: {
                title: "智能AI助手，即刻解决学习难题",
                subtitle: "全方位的智能学习辅导体验",
                socraticTitle: "苏格拉底式教学",
                socraticDesc: "引导学生独立思考，培养解决问题的能力，而非直接给出答案",
                subjectTitle: "全学科覆盖",
                subjectDesc: "支持数学、语文、英语、物理、化学等全学科在线辅导",
                ocrTitle: "智能图像识别",
                ocrDesc: "支持拍照上传作业题目，AI自动识别并分析",
                statsTitle: "学习数据统计",
                statsDesc: "记录学习进度，可视化展示学习成果，激励持续学习"
            },
            howTo: {
                title: "如何使用AI奇妙",
                step1Title: "创建会话",
                step1Desc: "点击\"开始新作业\"，输入作业标题",
                step2Title: "提问互动",
                step2Desc: "输入问题或上传图片，AI会引导你思考",
                step3Title: "深入学习",
                step3Desc: "跟随AI的引导，逐步理解解题思路",
                moreFaq: "查看更多常见问题 →"
            },
            statCard: {
                completedTasks: "已完成任务",
                studyHours: "学习时长",
                activeDays: "活跃天数"
            }
        },

        // New Session
        newSession: {
            title: "上传新作业",
            uploadTip: "支持格式：JPG、PNG、PDF。最大 10MB。"
        },

        // Chat & Detail
        chat: {
            welcome: "你好！👋 我是你的全科辅导老师。\n\n我的使命不是直接告诉你答案，而是引导你自己思考、发现和理解。\n\n📚 **我能帮你：**\n- 分析题目的关键信息\n- 拆解复杂问题的逻辑\n- 用生活化的方式解释抽象概念\n- 通过提问激发你的思维\n\n上传一张作业题目的照片，或者直接问我问题，让我们一起开始思考吧！",
            thinking: "💡 **思考一下：** ",
            analyzing: "正在分析题目...",
            recognizing: "正在识别图片...",
            analyzingQuestion: "正在分析你的问题...",
            autoAnalysisFailed: "自动分析失败，请手动发送消息重试",
            defaultQuestion: "请帮我分析这道题目，引导我思考解题思路",
            error: "错误: ",
            copy: "复制",
            uploadedImage: "📷 题目图片",
            connectError: "无法连接到 AI 导师。",
            uploadLimitTip: "请上传图片（JPG, PNG）或 PDF 文件",
            preview: "预览",
            processing: "处理中...",
            addAttachment: "添加图片或文件",
            inputPlaceholder: "输入消息...",
            sendMessage: "发送消息"
        },
        detail: {
            question: "题目",
            chatTitle: "AI 导师会话",
            refreshChat: "刷新对话",
            online: "在线",
            homeworkTitle: "作业题目",
            loadingQuestion: "加载题目中...",
            homeworkImageAlt: "作业题目",
            problemDescription: "题目描述"
        },

        // Upload Zone
        uploadZone: {
            title: "开始新的作业",
            subtitle: "输入题目文字、上传图片，或两者结合",
            placeholder: "在这里输入题目内容...（支持粘贴文字或图片）",
            addImage: "添加图片",
            startChat: "开始对话",
            inputLimit: "请输入题目或上传图片",
            loginRequired: "请先登录！",
            limitReached: "作业数量已达上限（{{limit}}个）！\n请先在\"我的作业\"中删除一些旧作业后再上传新的。",
            dailyLimitReached: "今日作业数量已达上限（{{limit}}个）！\n请明天再继续。",
            totalLimitReached: "作业总数已达上限（{{limit}}个）！\n请先删除部分旧作业后再上传新的（注意作业可以导出到本地）。",
            verifying: "🔍 正在验证用户...",
            uploadingImage: "📤 正在上传图片...",
            creatingSession: "📝 正在创建作业会话...",
            savingMessage: "✅ 保存消息中...",
            redirecting: "🚀 正在跳转...",
            uploadFailed: "上传失败: ",
            tips: {
                text: "输入文字",
                upload: "上传图片",
                paste: "粘贴图片 (Ctrl+V)",
                wait: "请稍候，正在处理您的作业..."
            }
        },
        // Notifications
        notifications: {
            title: "通知中心",
            markAllRead: "全部标记为已读",
            empty: "暂无通知",
            emptyTip: "完成作业后会收到成就通知哦！",
            unread: "{{count}}条未读",
            justNow: "刚刚",
            minsAgo: "{{count}}分钟前",
            hoursAgo: "{{count}}小时前",
            daysAgo: "{{count}}天前",
            achievement: {
                first: { title: "🎉 开启学习之旅！", msg: "恭喜完成第一个作业！这是你学习之旅的开始。" },
                five: { title: "🌟 初露锋芒！", msg: "你已经完成了 5 个作业，继续保持这个势头！" },
                ten: { title: "🏆 学习小能手！", msg: "太棒了！你已经完成了 10 个作业，成功升级到 Lv.2！" },
                twenty: { title: "💎 勤奋学习者！", msg: "厉害！完成 20 个作业，你已经是 Lv.3 了！" },
                fifty: { title: "👑 学习达人！", msg: "惊人！50 个作业完成，你是真正的学习达人！" },
                hundred: { title: "🔥 学霸诞生！", msg: "传奇！100 个作业，你已经是学霸级别了！" },
                levelup: { title: "⬆️ 恭喜升级！", msg: "你已经升级到 Lv.{{level}}！继续努力，下一个等级在等你！" }
            },
            streak: {
                title: "🔥 连续学习达成！",
                msg: "恭喜！你已经连续学习 {{days}} 天了。坚持就是胜利，保持这个势头！"
            },
            subject: {
                five: { title: "📚 {{subject}}小达人！", msg: "你已经在{{subject}}学科完成了 5 个作业，解锁称号！" },
                ten: { title: "🎓 {{subject}}探索者！", msg: "太棒了！10 个{{subject}}作业达成，你对这个学科越来越精通了！" },
                twenty: { title: "🏆 {{subject}}专家！", msg: "厉害！20 个{{subject}}作业，你已经是这个领域的专家了！" },
                fifty: { title: "👑 {{subject}}大师！", msg: "不可思议！50 个{{subject}}作业，你是真正的{{subject}}大师！" }
            },
            welcome: {
                title: "👋 欢迎回来！",
                msg: "好久不见！已经 {{days}} 天没看到你了，今天要不要来做个作业？",
                anniversary: { title: "🎂 注册{{year}}周年！", msg: "在这个特殊的日子里，感谢你一直以来的陪伴！" }
            }
        }
    },
    en: {
        // App Name
        appName: "AI7Miao-Smart Learning Hub",

        // Navigation
        nav: {
            home: "Dashboard",
            homework: "My Homework",
            statistics: "Statistics",
            settings: "Settings",
            faq: "FAQ",
            detail: "Homework Detail",
            new: "New Session",
            login: "Login",
            register: "Register",
            profile: "Profile",
            logout: "Logout",
            backHome: "Back to Home",
            personalSettings: "Personal Settings"
        },

        // Subjects
        subjects: {
            math: "Math",
            physics: "Physics",
            chemistry: "Chemistry",
            chinese: "Chinese",
            english: "English",
            biology: "Biology",
            history: "History",
            geography: "Geography",
            general: "General"
        },

        // Sidebar
        sidebar: {
            recent: "Recent Activity",
            untitled: "Untitled Session",
            downloadApp: "Download App",
            androidClient: "Android Client",
            usage: "Usage",
            nearLimit: "Near Limit",
            loading: "Loading..."
        },

        // Header
        header: {
            freePlan: "Free Plan",
            darkMode: "Dark Mode",
            rank: "Problem Solver",
            totalHomework: "Total"
        },

        // Auth
        auth: {
            loginTitle: "Welcome Back",
            loginSubtitle: "Sign in to continue",
            emailLabel: "Email Address",
            passwordLabel: "Password",
            forgotPassword: "Forgot Password?",
            loginButton: "Sign In",
            registerLink: "No account? Register now",
            registerTitle: "Create Account",
            registerSubtitle: "Start your smart learning journey",
            confirmPasswordLabel: "Confirm Password",
            registerButton: "Sign Up",
            loginLink: "Already have an account? Sign in",
            resetPasswordTitle: "Reset Password",
            resetPasswordSubtitle: "Enter your email to receive a reset link",
            sendLinkButton: "Send Reset Link",
            backToLogin: "Back to Login"
        },

        // Dashboard
        dashboard: {
            welcome: "Welcome back, {{name}}",
            startLearning: "Let's start learning today",
            uploadTitle: "Photo/Upload Homework",
            uploadDesc: "Supports Image, PDF, Word. AI smart grading & tutoring.",
            uploadButton: "Click to Upload",
            dragDrop: "or drag and drop files here",
            recentActivity: "Recent Activity",
            viewAll: "View All",
            newSession: "New Session",
            noActivity: "No activity yet"
        },

        // Common
        common: {
            loading: "Loading...",
            success: "Success",
            error: "Error",
            save: "Save",
            cancel: "Cancel",
            delete: "Delete",
            edit: "Edit",
            confirm: "Confirm",
            student: "Student",
            clear: "Clear",
            selectAll: "Select All"
        },

        // History
        history: {
            totalSessions: "{{count}} sessions total",
            noSessions: "No sessions",
            selected: "{{count}} selected",
            subject: "Subject",
            knowledgePoints: "Knowledge Points",
            searchPlaceholder: "Search sessions...",
            export: "Export",
            exporting: "Exporting...",
            deleting: "Deleting...",
            selectToExport: "Please select sessions to export",
            exportSuccess: "✅ Successfully exported {{count}} session(s) as {{format}}!",
            wordSaved: "📄 Word document saved to your downloads folder.",
            wordTip: "💡 Tip: You can open and edit with Microsoft Word or WPS.",
            pdfSaved: "📕 PDF file saved to your downloads folder.",
            pdfTip: "💡 Tip: You can open, view, or print directly. Perfect for sharing with teachers and parents.",
            markdownSaved: "📁 Downloaded {{count}} Markdown file(s) to your downloads folder.",
            markdownTip: "💡 Tip: If your browser asks, please allow multiple file downloads.",
            fileSaved: "📁 File saved to your downloads folder.",
            exportFailed: "❌ Export failed: ",
            deleteConfirm: "Are you sure you want to delete {{count}} selected session(s)? This action cannot be undone.",
            deleteSuccess: "Deleted successfully!",
            deleteFailed: "Delete failed: ",
            filterBySubject: "(Only showing knowledge points for selected subjects)",
            selectFormat: "Select Export Format",
            wordDoc: "Word Document",
            recommended: "Recommended",
            editable: "Editable · Easy to Print",
            singleOnly: "Single session only",
            txtText: "TXT Text",
            plainText: "Plain Text · Perfect Chinese",
            jsonData: "JSON Data",
            structured: "Structured · Batch Support",
            markdownDoc: "Markdown Document",
            plainTextBatch: "Plain Text · Batch Support",
            selectTip: "💡 Select sessions for batch operations",
            loading: "Loading...",
            untitled: "Untitled Session",
            view: "View",
            noSessionsFound: "No sessions found",
            tryOtherKeywords: "Try other keywords",
            noSessionsYet: "No homework sessions yet",
            startFromDashboard: "Start by uploading homework from the dashboard",
            timeAgo: {
                yearsAgo: "{{count}} year(s) ago",
                monthsAgo: "{{count}} month(s) ago",
                daysAgo: "{{count}} day(s) ago",
                hoursAgo: "{{count}} hour(s) ago",
                minutesAgo: "{{count}} minute(s) ago",
                justNow: "Just now"
            }
        },

        // Statistics
        statistics: {
            title: "Statistics",
            subtitle: "Track your growth and witness every progress",
            totalSessions: "Total Sessions",
            totalTime: "Total Study Time",
            totalKnowledgePoints: "Total Knowledge Points",
            streak: "Learning Streak",
            subjectDistribution: "Subject Distribution",
            noSubjectData: "No subject data",
            hotKnowledgePoints: "Trending Knowledge Points",
            noKnowledgePoints: "As you analyze more homework, your knowledge graph will appear here",
            achievements: "Achievements",
            unlock: "Complete homework to unlock achievements",
            keepGoing: "Keep Going!",
            startFirst: "Start your first learning session!",
            keepItUp: "You've taken the first step, keep it up!",
            accumulating: "Your efforts are accumulating, persistence is victory!",
            master: "You are a learning master, keep this passion!"
        },

        // Settings & Profile
        settings: {
            security: "Security Settings",
            newPassword: "New Password",
            confirmPassword: "Confirm New Password",
            changePassword: "Change Password",
            updating: "Updating...",
            passwordLengthError: "Password must be at least 6 characters",
            passwordMismatchError: "Passwords do not match",
            passwordSuccess: "Password changed successfully!",
            passwordError: "Update failed, please try again",
        },
        profile: {
            title: "Profile",
            subtitle: "Manage your personal information and account security",
            editTitle: "Edit Profile",
            noNickname: "No Nickname",
            noGrade: "No Grade",
            bioTitle: "Bio",
            defaultBio: "This user is lazy and wrote nothing...",
            avatarSettings: "Avatar Settings",
            chooseAvatarStyle: "Choose your avatar style:",
            nickname: "Nickname",
            grade: "Grade/Stage",
            selectGrade: "Select Grade",
            school: "School",
            bio: "Bio",
            grades: {
                primary1: "Grade 1 (Primary)",
                primary2: "Grade 2 (Primary)",
                primary3: "Grade 3 (Primary)",
                primary4: "Grade 4 (Primary)",
                primary5: "Grade 5 (Primary)",
                primary6: "Grade 6 (Primary)",
                middle7: "Grade 7 (Middle School)",
                middle8: "Grade 8 (Middle School)",
                middle9: "Grade 9 (Middle School)",
                high10: "Grade 10 (High School)",
                high11: "Grade 11 (High School)",
                high12: "Grade 12 (High School)",
                university: "Undergraduate",
                graduate: "Graduate",
                adult: "Adult / Professional"
            }
        },

        // FAQ
        faq: {
            title: "Frequently Asked Questions",
            subtitle: "Everything you want to know about AI奇妙",
            stillHaveQuestions: "Still have questions?",
            helpText: "We are always ready to help. Start using AI奇妙 and experience the joy of smart learning!",
            startUsing: "Start Using",
            q1: "How does AI奇妙 work?",
            a1: "AI奇妙 uses advanced AI and the Socratic method to guide your thinking by asking questions instead of giving direct answers. You can input questions or upload images, and the AI will analyze the problem and guide you through understanding the solution.",
            q2: "Is AI奇妙 free to use?",
            a2: "Currently, AI奇妙 is completely free. You only need to register an account to enjoy all features, including full-subject tutoring, image recognition, and learning statistics.",
            q3: "Which subjects are supported?",
            a3: "The system supports Math, Chinese, English, Physics, Chemistry, Biology, History, Geography, Politics, and more. From primary school to high school, we provide professional learning guidance.",
            q4: "Will the AI give me answers directly?",
            a4: "No. We use the Socratic method to guide your thinking through questions, helping you find the answer yourself. This method cultivates independent thinking and problem-solving skills.",
            q5: "How accurate are the explanations?",
            a5: "Our AI system is based on advanced deep learning models trained on vast educational data, providing highly accurate analysis and guidance. However, we suggest using it as a learning aid to cultivate independent thinking.",
            q6: "How to get a better experience?",
            a6: "We recommend providing clear descriptions or high-quality images. For math problems, specify the concept; for humanities, provide context. Actively participating in the AI's guided questioning yields better results.",
            features: {
                guided: "Guided Learning",
                guidedDesc: "Cultivate independent thinking",
                fullSubject: "Full Subject Coverage",
                fullSubjectDesc: "From primary to high school",
                stats: "Learning Statistics",
                statsDesc: "Visualize learning progress"
            },

            // Dashboard Features & Steps
            dashboardFeature: {
                title: "Smart AI Assistant, Solve Problems Instantly",
                subtitle: "Comprehensive smart learning tutoring experience",
                socraticTitle: "Socratic Method",
                socraticDesc: "Guide students to think independently, cultivate problem-solving skills, rather than giving answers directly",
                subjectTitle: "Full Subject Coverage",
                subjectDesc: "Supports Math, Chinese, English, Physics, Chemistry, and more",
                ocrTitle: "Smart Image Recognition",
                ocrDesc: "Supports taking photos of homework problems, AI automatically recognizes and analyzes",
                statsTitle: "Learning Statistics",
                statsDesc: "Record learning progress, visualize learning results, encourage continuous learning"
            },
            howTo: {
                title: "How to Use AI Homework Assistant",
                step1Title: "Create Session",
                step1Desc: "Click \"Start New Session\", enter homework title",
                step2Title: "Interactive Q&A",
                step2Desc: "Enter question or upload image, AI will guide your thinking",
                step3Title: "Deep Learning",
                step3Desc: "Follow AI guidance, gradually understand the solution path",
                moreFaq: "View more FAQs →"
            },
            statCard: {
                completedTasks: "Completed Tasks",
                studyHours: "Study Hours",
                activeDays: "Active Days"
            }
        },

        // New Session
        newSession: {
            title: "Upload New Homework",
            uploadTip: "Supports JPG, PNG, PDF. Max 10MB."
        },

        // Chat & Detail
        chat: {
            welcome: "Hello! 👋 I am your all-subject tutor.\n\nMy mission is not to give you the answer directly, but to guide you to think, discover and understand.\n\n📚 **I can help you:**\n- Analyze key information\n- Break down complex logic\n- Explain abstract concepts simply\n- Spark your thinking with questions\n\nUpload a photo of your homework, or ask me directly, let's start thinking!",
            thinking: "💡 **Think about it:** ",
            analyzing: "Analyzing the problem...",
            recognizing: "Recognizing image...",
            analyzingQuestion: "Analyzing your question...",
            autoAnalysisFailed: "Auto-analysis failed, please retry manually.",
            defaultQuestion: "Please help me analyze this problem and guide my thinking.",
            error: "Error: ",
            copy: "Copy",
            uploadedImage: "📷 Homework Image",
            connectError: "Cannot connect to AI Tutor.",
            uploadLimitTip: "Please upload an image (JPG, PNG) or PDF file",
            preview: "Preview",
            processing: "Processing...",
            addAttachment: "Add image or file",
            inputPlaceholder: "Type a message...",
            sendMessage: "Send Message"
        },
        detail: {
            question: "Question",
            chatTitle: "AI Tutor Chat",
            refreshChat: "Refresh Chat",
            online: "Online",
            homeworkTitle: "Homework Title",
            loadingQuestion: "Loading Question...",
            homeworkImageAlt: "Homework Problem",
            problemDescription: "Problem Description"
        },

        // Upload Zone
        uploadZone: {
            title: "Start New Session",
            subtitle: "Enter text, upload image, or both",
            placeholder: "Enter problem content here... (Supports paste text or image)",
            addImage: "Add Image",
            startChat: "Start Chat",
            inputLimit: "Please enter text or upload image",
            loginRequired: "Please login first!",
            limitReached: "Session limit reached ({{limit}})! \nPlease delete some old sessions in \"My Homework\".",
            dailyLimitReached: "Daily homework limit reached ({{limit}})! \nPlease continue tomorrow.",
            totalLimitReached: "Total homework limit reached ({{limit}})! \nPlease delete some old sessions before uploading new ones (Note: sessions can be exported locally).",
            verifying: "🔍 Verifying user...",
            uploadingImage: "📤 Uploading image...",
            creatingSession: "📝 Creating session...",
            savingMessage: "✅ Saving message...",
            redirecting: "🚀 Redirecting...",
            uploadFailed: "Upload failed: ",
            tips: {
                text: "Enter Text",
                upload: "Upload Image",
                paste: "Paste Image (Ctrl+V)",
                wait: "Please wait, processing your homework..."
            }
        },
        // Notifications
        notifications: {
            title: "Notifications",
            markAllRead: "Mark all as read",
            empty: "No notifications",
            emptyTip: "You will receive notifications after completing homework!",
            unread: "{{count}} unread",
            justNow: "Just now",
            minsAgo: "{{count}}m ago",
            hoursAgo: "{{count}}h ago",
            daysAgo: "{{count}}d ago",
            achievement: {
                first: { title: "🎉 Start Journey!", msg: "Congrats on your first homework! Your journey begins." },
                five: { title: "🌟 Rising Star!", msg: "You have completed 5 sessions. Keep it up!" },
                ten: { title: "🏆 Good Student!", msg: "Awesome! 10 sessions completed. You are now Lv.2!" },
                twenty: { title: "💎 Diligent!", msg: "Amazing! 20 sessions completed. You are now Lv.3!" },
                fifty: { title: "👑 Master!", msg: "Incredible! 50 sessions completed. You are a true master!" },
                hundred: { title: "🔥 Legend!", msg: "Legendary! 100 sessions completed. You are unstoppable!" },
                levelup: { title: "⬆️ Level Up!", msg: "You reached Lv.{{level}}! Keep going!" }
            },
            streak: {
                title: "🔥 Streak!",
                msg: "Congrats! You have studied for {{days}} days in a row!"
            },
            subject: {
                five: { title: "📚 {{subject}} Beginner!", msg: "You have completed 5 sessions in {{subject}}!" },
                ten: { title: "🎓 {{subject}} Explorer!", msg: "Awesome! 10 sessions in {{subject}}. You are mastering it!" },
                twenty: { title: "🏆 {{subject}} Expert!", msg: "Amazing! 20 sessions in {{subject}}. You are an expert!" },
                fifty: { title: "👑 {{subject}} Master!", msg: "Incredible! 50 sessions in {{subject}}. A true master!" }
            },
            welcome: {
                title: "👋 Welcome Back!",
                msg: "Long time no see! It's been {{days}} days. Ready to learn?",
                anniversary: { title: "🎂 {{year}} Year Anniversary!", msg: "Happy Anniversary! Thank you for being with us!" }
            }
        }
    }
};
