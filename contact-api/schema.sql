-- Contact form messages
CREATE TABLE IF NOT EXISTS `contact_messages` (
  `id`         INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `email`      VARCHAR(255) NOT NULL,
  `name`       VARCHAR(100) NOT NULL,
  `phone`      VARCHAR(50)  NULL,
  `title`      VARCHAR(255) NOT NULL,
  `content`    TEXT         NOT NULL,
  `page`       VARCHAR(500) NULL,
  `client_time` VARCHAR(50) NULL,
  `ip`         VARCHAR(45)  NULL,
  `user_agent` VARCHAR(500) NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_email` (`email`),
  KEY `idx_created_at` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
