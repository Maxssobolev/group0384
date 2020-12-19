-- phpMyAdmin SQL Dump
-- version 4.6.6deb5ubuntu0.5
-- https://www.phpmyadmin.net/
--
-- Хост: localhost:3306
-- Время создания: Дек 19 2020 г., 14:53
-- Версия сервера: 5.7.32-0ubuntu0.18.04.1
-- Версия PHP: 7.2.24-0ubuntu0.18.04.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `0384_group`
--

-- --------------------------------------------------------

--
-- Структура таблицы `main_posts`
--

CREATE TABLE `main_posts` (
  `id` int(10) NOT NULL,
  `category` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'main_posts',
  `title` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `author` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `news`
--

CREATE TABLE `news` (
  `id` int(12) NOT NULL,
  `title` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` datetime NOT NULL,
  `label` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `author` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `actual` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `news`
--

INSERT INTO `news` (`id`, `title`, `content`, `date`, `label`, `author`, `actual`) VALUES
(13, 'Перенос лекции по информатике', '<p>Лекция от 16 декабря <strong>переносятся&nbsp;<em>на субботу, 19 декабря 2020</em></strong>, начало также в <strong>13:45.</strong></p>\n', '2020-12-02 19:34:14', 'important', 'Максим', '2020-12-19 13:45:00'),
(14, 'Перенос лаб. по информатике', '<p><strong>Лабораторные работы</strong> с 15 и 16 декабря переносятся&nbsp;<em>на субботу, 19 декабря, 15:40. &nbsp;</em></p>\n\n<p>Какое точно расписание будет -- определим ближе к дате, будет зависеть от количества желающих защищать лабораторную.</p>\n', '2020-12-02 19:46:17', 'important', 'Максим', '2020-12-19 15:40:00'),
(23, 'Выбор дня защиты курсовой', '<p>Как обсуждалось на лекциях, вам предлагается выбрать день для защиты курсовой работы.<br />\nДля вашей группы 0384&nbsp;расписание защит представлено в следующем документе:<br />\n<br />\nПросьба <span class=\"marker\">до 21:00 четверга (10 декабря)</span> вписать себя в таблицу:<br />\n<a href=\"https://docs.google.com/spreadsheets/d/1n3Za050sfe-2ZkrwvzzTfJ_9khIxZvcTofFBdPgJJYU/edit?usp=sharing\" target=\"_blank\">https://docs.google.com/spreadsheets/d/1n3Za050sfe-2ZkrwvzzTfJ_9khIxZvcTofFBdPgJJYU/edit?usp=sharing</a><br />\n<br />\nВ каждый из дней защищаться может не более определенного количества человек (таблица размечена не просто так).<br />\nТе, кто не запишутся к вечеру четверга будут распределены по оставшимся свободным слотам в случайном порядке.</p>\n', '2020-12-08 16:16:01', 'important', 'Максим', '2020-12-10 21:00:00'),
(26, 'Компенсация пропущенных занятий по философии', '<p>Философ:<br />\nОтправляю вам информацию о компенсации оценок за пропущенные занятия. Чтобы компенсировать оценки вам нужно сделать и прислать конспект одной главы из домашнего задания к пропущенному семинару.<br />\n<br />\nНазвание файла:<br />\nСеминар1_Глава_Фамилия_Группа.docx<br />\n<br />\nПрисылать можно как обычно на почту и в личном кабинете.<br />\n<br />\n<strong>Жду конспектов до следующего воскресенья 20.12.2020</strong><br />\n<br />\nВ ведомости компенсированные семинары будут отмечены плюсами.<br />\n&nbsp;</p>\n', '2020-12-14 09:39:26', 'useful', 'Максим', '2020-12-20 23:59:00'),
(27, 'Контрольная по Мат. анализу', '<p>нужно будет строить графики</p>\n', '2020-12-15 17:23:11', 'event', 'Максим', '2020-12-22 17:20:00'),
(28, 'КР №2 - Матрицы и определители (Доп. мат.)', '<p>Каждому студенту будут предложены задачи по теме &quot;Матрицы и определители&quot;. Время, отведенное для решения задач &ndash;&nbsp;<strong>80</strong><strong>&nbsp;минут + 5 минут на загрузку файла</strong>. В качестве результата необходимо приложить ответы,&nbsp;<strong>написанные от руки</strong>&nbsp;и трансформированные&nbsp;<strong>в один файл формата .pdf!</strong>&nbsp;Ответы, оформленные&nbsp;<strong>в печатном виде</strong>&nbsp;<strong>или</strong>&nbsp;<strong>набранные на компьютере</strong>, приниматься&nbsp;<strong>не будут!</strong></p>\n', '2020-12-16 10:42:15', 'event', 'Максим', '2020-12-18 10:00:00'),
(29, 'КР №2 - Исследование функций (Доп. мат.)', '<p>Каждому студенту будут предложены задачи по теме &quot;Исследование функций&quot;. Время, отведенное для решения задач &ndash;&nbsp;<strong>80</strong><strong>&nbsp;минут + 5 минут на загрузку файла</strong>. В качестве результата необходимо приложить ответы,&nbsp;<strong>написанные от руки</strong>&nbsp;и трансформированные&nbsp;<strong>в один файл формата .pdf!</strong>&nbsp;Ответы, оформленные&nbsp;<strong>в печатном виде</strong>&nbsp;<strong>или</strong>&nbsp;<strong>набранные на компьютере</strong>, приниматься&nbsp;<strong>не будут!</strong></p>\n', '2020-12-16 10:42:39', 'event', 'Максим', '2020-12-18 12:00:00'),
(30, 'Аттестация по АиГ (Зельвенский)', '<p>24 декабря 2020 г. в потоке будет проведена дистанционная диагностическая работа (ДДР) &ndash; это вторая часть экзамена (первая &ndash; это оценка за работу в семестре). На ней будут три задачи.</p>\n\n<p><strong>По результатам ДДР и оценке за работу в семестре</strong>&nbsp;студенты получают одну из трёх возможных отметок, которые будут вывешены&nbsp;<strong>накануне консультации перед экзаменом</strong>:</p>\n\n<p><strong>2</strong>&nbsp;&ndash;&nbsp;<em>неудовлетворительно</em>&nbsp;&ndash; с этой оценкой студенты обязаны переписать ДДР&nbsp;<strong>на консультации перед экзаменом</strong>, повторная неудача означает неудовлетворительную отметку в экзаменационной ведомости;</p>\n\n<p><strong>3</strong>&nbsp;&ndash;&nbsp;<em>удовлетворительно</em>&nbsp;&ndash; эта оценка идёт в экзаменационную ведомость;</p>\n\n<p><strong>3+</strong>&nbsp;&ndash;&nbsp;<em>весьма удовлетворительно</em>&nbsp;&ndash; эта оценка позволяет (<strong>при выраженном желании студента</strong>) получить на экзамене билет (с теоретическими вопросами и задачей) и ответить на него письменно в расчёте на хорошую или отличную отметку (с риском получить неуд.).</p>\n', '2020-12-16 12:36:04', 'important', 'Максим', '2020-12-24 23:59:00'),
(31, 'КР по информатике ', '<p><strong>Во вторник 22 декабря</strong><br />\nВместо защиты лаб. работ.</p>\n', '2020-12-18 21:00:36', 'event', 'Максим', '2020-12-22 15:40:00'),
(33, '24 дек. - доп. день для защиты по инфе', '<p>Защита ЛР-3 для тех, у кого не было попыток до дедлайна, будет проходить в доп. день -- &nbsp;24 декабря:</p>\n\n<ul>\n	<li>в 17:20 у групп 0382, 0383, 0384</li>\n</ul>\n', '2020-12-18 21:04:33', 'useful', 'Максим', '2020-12-24 17:20:00'),
(34, 'Консультация перед зачетом по физике', '<p>Консультация перед диф.&nbsp;зачетом состоится&nbsp; <strong>в субботу 21.декабря в 17-20</strong>. в Zoom. Желающие присоединяйтесь.&nbsp; Готовьте вопросы.&nbsp;&nbsp;&nbsp;</p>\n', '2020-12-18 22:17:51', 'useful', 'Максим', '2020-12-19 17:20:00');

-- --------------------------------------------------------

--
-- Структура таблицы `subjects`
--

CREATE TABLE `subjects` (
  `id` int(11) NOT NULL,
  `title` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `new` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `subjects`
--

INSERT INTO `subjects` (`id`, `title`, `new`) VALUES
(1, 'Программирование', 0),
(2, 'Информатика', 0),
(3, 'Физика', 0),
(4, 'Мат. анализ', 0),
(5, 'АиГ', 0),
(6, 'Философия', 0);

-- --------------------------------------------------------

--
-- Структура таблицы `subjects_homework`
--

CREATE TABLE `subjects_homework` (
  `id` int(11) NOT NULL,
  `subject_id` int(12) NOT NULL,
  `title` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` datetime NOT NULL,
  `deadline` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `subjects_homework`
--

INSERT INTO `subjects_homework` (`id`, `subject_id`, `title`, `content`, `date`, `deadline`) VALUES
(3, 5, 'Матрицы', 'Вариант в зависимости от порядкового номера\nhttps://drive.google.com/file/d/1dZwQReEJtesrl3qQXEwi01kj8WXOGp33/view?usp=sharing', '2020-11-23 10:00:00', '2020-11-30 10:00:00'),
(4, 5, 'Системы', 'Вариант в зависимости от порядкового номера\nhttps://drive.google.com/file/d/1c_HRb1BGDBLMp_pC8-EKKXZxDa-AAXN_/view?usp=sharing', '2020-11-23 10:00:00', '2020-12-07 10:00:00'),
(6, 4, 'Допсдача теста', 'Файл содержит индивидуальное задание теста 20_11 для каждого студента потока.\n\nНа почту групп высланы файлы с оценками работ, которые я смог прочесть.\n\nПометка \"лк\" означает, что я не смог вытащить работу из личного кабинета.\n\nВсем, кто не получил оценку я предлагаю, оформить (очень кратко) и \n\nприслать  мне ответ  ( в мудл)  до 5 декабря.\n\nРабота должна быть оформлена одним ПДФ файлом.\n\nВ начале файла должны  быть написаны Ваша фамилия, группа, вариант.\n\nОтветы на каждый вопрос или  задачу должен быть четко отделен. \n\nhttps://vec.etu.ru/moodle/pluginfile.php/159826/mod_assign/introattachment/0/%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F%2020_11_20.pdf?forcedownload=1', '2020-11-25 11:00:00', '2020-12-05 00:00:00'),
(7, 6, 'Коллективная контрольная работа', 'На этот раз вам нужно будет написать коллективную работу, работая в команде.\n\n<i>Каждая группа должна разбиться на три команды поровну.</i> Каждая команда должна выбрать одну из трёх теорий в отношении справедливости (утилитаризм, либертарианство, теория Проза). Задачей является показать, почему выбранная позиция в отношении справедливости является правильной, рассмотрев основные аргументы против теории.\n\nВ качестве литературы можно использовать главы из книги Сэндела \"Справедливость\".\nhttps://www.mann-ivanov-ferber.ru/assets/files/bookparts/justice/spravedlivost_read.pdf\n\n<div>\nОформление.\n\nКонтрольная должна состоять из трех смысловых частей.\n<ol>\n<li>Описание выбранной теории.</li>\n\n<li>Представление аргументов против нее и их критика. Критика не должна повторять материал из книги. Можно приводить модельные случаи не только из соответствующей главы.</li>\n\n<li>Формулирование и обоснование вывода: Разбор и критика аргументов против вашей теории позволяет сделать вывод, что выбранный подход к справедливости является правильным.</li>\n</ol>\n</div>\nОбъем: до 3х страниц, шрифт 14, межстрочный интервал 1.5, поля 2 см.\n\nНазвание файла: Контрольная3_Утилитаризм(или другое)_Группа.docx\n\nНа первой странице должны стоять фамилии всех студентов, работавших в команде. Оценка будет общей для всех.\n\nТрадиционно, контрольные можно присылать в личном кабинете и на электронный адрес.\n\n\nВ Мудле контрольную выполнять не нужно, она там только для напоминания о сроках.', '2020-11-30 15:40:00', '2020-12-06 23:55:00'),
(8, 1, 'Лаб. работа №3', '.', '2020-12-02 20:00:00', '2020-12-12 23:59:59'),
(9, 2, 'Лаб. работа №3', '', '2020-12-02 12:00:00', '2020-12-20 23:58:59'),
(14, 4, 'ИДЗ - Графики', '<p>Построить графики функций и провести анализ, как показывал Коптелов на практиках<br />\n<a href=\"https://drive.google.com/file/d/1XfWRbgdxzdTCM3KMr-aPPvXtgDC5HHso/view?usp=sharing\">https://vk.com/doc204631549_585553918?hash=4af0b30e6c827ba249&dl=862f0c8538369891e9</a></p>\n', '2020-12-08 16:41:04', '2020-12-15 17:20:00'),
(15, 5, 'ИДЗ Вектора', '<p><a href=\"https://drive.google.com/file/d/1Ov-l3WrzCLOPKzrSjcei4BzswSr-HVU8/view\" target=\"_blank\">https://drive.google.com/file/d/1Ov-l3WrzCLOPKzrSjcei4BzswSr-HVU8/view</a></p>\n', '2020-12-09 22:13:54', '2020-12-16 15:40:00'),
(16, 6, 'Семинар 15', '<p>С. Лоу. Философский тренинг. Глава 9</p>\n\n<p><a href=\"https://drive.google.com/file/d/1_rWZOxRKbgZtLv8q8JuXq71vqf0P9PLC/view?usp=sharing\" target=\"_blank\">А. Павлов. Постыдное удовольствие. Раздел VI, Глава 2 (&quot;Южный Парк&quot;, мультипликационные войны и современная политическая философия)</a></p>\n\n<p>&nbsp;</p>\n', '2020-12-10 10:20:50', '2020-12-14 15:40:00'),
(17, 6, 'Семинар 15 (последний)', '<p><a href=\"https://drive.google.com/file/d/1d1AfJW_ZgXm_dKsuZug-od-rP_SSfHz-/view?usp=sharing\">Ж.-П. Сартр. Экзистенциализм</a> - это гуманизм.<br />\nТ. Нагель. Что все это значит?&nbsp; Глава 10.</p>\n\n<p>&nbsp;</p>\n', '2020-12-16 11:39:46', '2020-12-21 15:40:00'),
(18, 1, 'Крайний срок всех курсов на мудле и PR', '<p>Крайний срок создания всех PR (с целью получения 2 баллов за них), прохождения основного и дополнительного курса: <strong>23:59:59 27 декабря</strong></p>\n', '2020-12-16 18:45:21', '2020-12-27 23:59:00');

-- --------------------------------------------------------

--
-- Структура таблицы `subjects_lectories`
--

CREATE TABLE `subjects_lectories` (
  `id` int(11) NOT NULL,
  `subject_id` int(12) NOT NULL,
  `title` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `subjects_lectories`
--

INSERT INTO `subjects_lectories` (`id`, `subject_id`, `title`, `content`, `type`, `date`) VALUES
(6, 6, 'презентация \"Познание\"', 'https://mega.nz/file/ir5EVYaI#EwRn9-vdMNH4f1dpNEeuYd9v1EsuAfod6aA5FVjDJPU', 'link', '2020-11-26 16:00:00'),
(7, 1, 'лекция №1', 'n_0tuaAnboM', 'youtube', '2020-09-28 09:00:00'),
(8, 1, 'Введение в Linux', 'fVQyEtBnRvs', 'youtube', '2020-10-06 00:00:00'),
(9, 1, 'О заголовочных файлах', 'https://drive.google.com/file/d/1Yyu2eaGCjRHRQVu8rS2GMo-82mE1GUpg/preview', 'frame', '2020-10-29 10:00:00'),
(10, 6, 'презентация \"Сознание\"', 'https://mega.nz/file/Dn5SgCiZ#8azpFlOHeWZncaTqteU57Im1FDSmVTgxQWYFtbqRg88', 'link', '2020-11-12 16:00:00'),
(11, 2, 'Мастер класс №1', 'vrCtWGPnqjo', 'youtube', '2020-09-23 09:00:00'),
(12, 2, 'Введение в Python (продолжение)', 'C5bEeODiBg4', 'youtube', '2020-09-29 07:00:00'),
(13, 2, 'Мастер класс №2', 'AKBJfw3PtMs', 'youtube', '2020-09-30 00:00:00'),
(14, 2, 'Интерактив по Python от Т.А. Берленко', 'JEi59GuxFXk', 'youtube', '2020-10-07 00:00:00'),
(15, 2, 'Лекция №3. Введение в Python (завершение) ', 'oNXEc4TH-3s', 'youtube', '2020-10-09 00:00:00'),
(16, 2, 'Лекция №5. Использование PyCharm, отладка', '2wFestfpm08', 'youtube', '2020-10-14 00:00:00'),
(17, 2, 'Лекция №2. Введение в Python (продолжение)', 'C5bEeODiBg4', 'youtube', '2020-09-29 00:00:00'),
(18, 2, 'Лекция №6. Введение в Архитектуру ЭВМ (начало) ', 'lcOaTB3fwF8', 'youtube', '2020-10-21 00:00:00'),
(19, 2, 'Лекция №9. Пример для Машины Тьюринга. Введение в ООП ', 'vDTEm1lrv38', 'youtube', '2020-11-11 00:00:00'),
(20, 2, 'Дополнтиельное занятие по форматам представления данных в памяти компьютера ', 'kjID0RzYbuE', 'youtube', '2020-11-13 00:00:00'),
(21, 2, 'Дополнтиельное занятие по форматам представления данных в памяти компьютера ', 'KuEhmo4Re2A', 'youtube', '2020-11-14 00:00:00'),
(26, 3, 'Криволинейное движение доп.', 'lTwTM4_XONc', 'youtube', '2020-11-26 03:00:00'),
(27, 3, 'Криволинейное движение', '8z90rr9QsxQ', 'youtube', '2020-11-26 00:00:00'),
(28, 5, 'Комлпексные числа', '91MyDR9gzus', 'youtube', '2020-10-21 00:00:00'),
(29, 4, 'Производные сложных функций', 'w9JERzG8CgM', 'youtube', '2020-10-20 00:00:00'),
(30, 1, 'Как же сделать pull  request', 'D4mW-86-Tp0', 'youtube', '1900-01-01 00:00:00'),
(31, 2, 'Как же сделать pull  request', 'D4mW-86-Tp0', 'youtube', '1900-01-01 00:00:00'),
(32, 4, 'Коптелов, графики', 'I9cIEaxtF8g', 'youtube', '2020-12-01 17:00:00'),
(33, 4, 'Коточигов, разбор некоторых работ (20 вопросов)', 'iv1u5uvRLRU', 'youtube', '2020-12-01 12:00:00'),
(34, 4, 'Коточигов, графики', '4GVus3TwPmI', 'youtube', '2020-12-04 03:00:00'),
(35, 4, 'Коптелов, графики ч2', 'xSdkO2kQTR0', 'youtube', '2020-12-08 18:00:00'),
(36, 1, '', 'etEopYI6ivc', 'youtube', '2020-11-23 12:00:00'),
(37, 1, '', 'ui_TrGgyUwI', 'youtube', '2020-12-07 12:00:00');

-- --------------------------------------------------------

--
-- Структура таблицы `subjects_links`
--

CREATE TABLE `subjects_links` (
  `id` int(11) NOT NULL,
  `subject_id` int(11) NOT NULL,
  `title` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `href` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `subjects_links`
--

INSERT INTO `subjects_links` (`id`, `subject_id`, `title`, `href`) VALUES
(1, 1, 'MOEVM WIKI', 'http://se.moevm.info/doku.php'),
(2, 4, 'Google Drive нашей группы', 'https://drive.google.com/drive/folders/1AGv0YyqhAYgn9VkxeS5uCx0BvdxK-zd2?usp=sharing'),
(3, 4, 'Таблица успеваемости', 'https://docs.google.com/spreadsheets/d/1fSHhaBPzHuY0tR_ZZ7-5BSeYn4Rl_yAsGeOASImS43M/edit#gid=475752787'),
(4, 3, 'Сайт кафедры', 'http://physicsleti.ru/index.php/pervokursniku.html'),
(5, 1, 'Правила и описание рейтинговой системы', 'https://docs.google.com/document/d/e/2PACX-1vTtXaIHyytYyn3CxJ09zLXwm6jao8uEvWHL81XDe0Xh46g6aC5uatNGl3zGULaXDDjlZeVdPD3EhZ7c/pub'),
(6, 5, 'Плейлист с лекциями', 'https://www.youtube.com/watch?v=6YVVMu_TzUA&list=PLwL0ZEQK13GNDaTcy9QLfhGvLEuR93Oe8&index=15'),
(7, 1, 'Задания на курсовые', 'https://docs.google.com/spreadsheets/d/1222lgqOzhvW9WwvN6FI4EfP0Kd-FdFcutWX01vcszdo/edit?usp=sharing');

-- --------------------------------------------------------

--
-- Структура таблицы `teachers`
--

CREATE TABLE `teachers` (
  `id` int(11) NOT NULL,
  `subject_id` int(12) NOT NULL,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `contact` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `teachers`
--

INSERT INTO `teachers` (`id`, `subject_id`, `name`, `contact`) VALUES
(3, 2, 'Шевская Наталья Владимировна', 'natalya.razmochaeva@moevm.info'),
(4, 1, 'Чайка Константин Владимирович', 'konstantin.chaika@moevm.info'),
(5, 1, 'Жангиров Тимур Рафаилович', 'ksenox94@gmail.com'),
(6, 5, 'Чирина Анна Владимировна', 'annatchirina@yandex.ru'),
(7, 4, 'Коточигов Александр Михайлович', 'amkotochigov@gmail.com'),
(8, 4, 'Коптелов Ярослав Юрьевич', 'kopya239@yandex.ru'),
(9, 3, 'Кузьмина Наталья Николаевна', 'nnkuzmina@etu.ru'),
(10, 3, 'Шишкина Марина Николаевна', 'mnshishkina@etu.ru'),
(11, 3, 'Шаталова Александра Борисовна', 'ashatalova1@gmail.com'),
(12, 6, 'Пономарёв Андрей Игоревич', 'andre.ponomarov@gmail.com'),
(13, 6, 'Федоров Роман Валентинович ', 'rvfedorov@etu.ru'),
(14, 5, 'Игорь Григорьевич Зельвенский', 'igz@mail333.com');

-- --------------------------------------------------------

--
-- Структура таблицы `timetable`
--

CREATE TABLE `timetable` (
  `id` int(11) NOT NULL,
  `weekday` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `start` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `flags` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `timetable`
--

INSERT INTO `timetable` (`id`, `weekday`, `start`, `name`, `link`, `flags`) VALUES
(1, 'Thu', '11:35', 'Философия (нч) / Аиг (ч)', 'https://zoom.us/j/91535868512?pwd=Sm41eXEzZlMwZjVqRGwzT1U1OUJVdz09\n\n', ''),
(2, 'Thu', '13:45', 'АиГ', 'https://vec.etu.ru/moodle/course/view.php?id=2448#section-4', ''),
(3, 'Thu', '17:20', 'Доп. Физика (Кузьмина)', 'https://zoom.us/j/97252996319?pwd=YTloQm1ETGlnbW16NlFuK2x4S2d6dz09', ''),
(5, 'Mon', '11:35', 'Программирование', 'https://zoom.us/j/99909419865?pwd=ZXFpWFVwUzlmbkxMWFU3RXE2ZEdqdz09', ''),
(6, 'Mon', '13:45', 'Физкультура', '', ''),
(7, 'Mon', '15:40', 'Философия семинар', 'https://zoom.us/j/97027752712?pwd=K05XK0pQd1pncjdrNFY2OUhBSVVOdz09', ''),
(8, 'Mon', '17:20', 'Программирование лаб.', '', ''),
(9, 'Tue', '13:45', 'Ин. яз.', '', ''),
(10, 'Tue', '15:40', 'Информатика лаб.', '', ''),
(11, 'Tue', '17:20', 'Мат. Анализ пр.', 'https://us04web.zoom.us/j/5312301415?pwd=NmNGcHpoeG53Wldwb2xuSHVEY3lUUT09', ''),
(12, 'Wed', '13:45', 'Информатика', 'https://zoom.us/j/98397563419?pwd=ckVteUx5ZHRNcFB6NFlzeWg2REYrUT09', ''),
(13, 'Wed', '15:40', 'АиГ пр.', 'https://us04web.zoom.us/j/9927609261?pwd=Y2VBLyt4U3poR1E5L0ZQS0hyS1JSQT09', ''),
(14, 'Fri', '9:40', 'Доп. Мат. (Сучков)', 'https://vec.etu.ru/moodle/mod/bigbluebuttonbn/view.php?id=22167', ''),
(15, 'Fri', '11:35', 'Доп. Мат. (Сучков)', 'https://vec.etu.ru/moodle/mod/bigbluebuttonbn/view.php?id=22167', ''),
(18, 'Fri', '13:45', 'Физкультура', '', ''),
(19, 'Fri', '15:40', 'Мат. Анализ', 'https://zoom.us/j/97369007164?pwd=Z05DdFFaRlgzMkF1VC9ZcnB0RGwwdz09', ''),
(21, 'Fri', '17:20', 'Физ. пр (нч) / Физ. лаб. (ч)', '', ''),
(22, 'Sat', '', '', '', 'weekend'),
(23, 'Sun', '', '', '', 'weekend');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `main_posts`
--
ALTER TABLE `main_posts`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `subjects_homework`
--
ALTER TABLE `subjects_homework`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `subjects_lectories`
--
ALTER TABLE `subjects_lectories`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `subjects_links`
--
ALTER TABLE `subjects_links`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `timetable`
--
ALTER TABLE `timetable`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `main_posts`
--
ALTER TABLE `main_posts`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `news`
--
ALTER TABLE `news`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
--
-- AUTO_INCREMENT для таблицы `subjects`
--
ALTER TABLE `subjects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT для таблицы `subjects_homework`
--
ALTER TABLE `subjects_homework`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT для таблицы `subjects_lectories`
--
ALTER TABLE `subjects_lectories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
--
-- AUTO_INCREMENT для таблицы `subjects_links`
--
ALTER TABLE `subjects_links`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT для таблицы `teachers`
--
ALTER TABLE `teachers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT для таблицы `timetable`
--
ALTER TABLE `timetable`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
