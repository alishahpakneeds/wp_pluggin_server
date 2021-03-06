<?php

/*
 * Plugin Name: Seo Manager
 * Plugin URI: http://www.seomgr.com
 * Description: Seo Manager Plugin
 * Version: 2.6.3
 * Author: Ahsan Bilal
 * Author URI: http://www.seomgr.com
 * License: GPLv2 or later
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 */

// disable direct access
if (!defined('ABSPATH'))
    exit;

define('SEOMGR_VERSION', '1');
define('SEOMGR_BASE_URL', plugins_url('seomgr') . '/'); //plugin_dir_url(__FILE__)
define('SEOMGR_ASSETS_URL', SEOMGR_BASE_URL . 'assets/');

define('SEOMGR_BASE_DIR_LONG', dirname(__FILE__) . '/');
define('SEOMGR_INC_DIR', SEOMGR_BASE_DIR_LONG . '/inc/');
define('SEOMGR_LIB_DIR', SEOMGR_BASE_DIR_LONG . 'lib/');
define('SEOMGR_VIEWS_DIR', SEOMGR_BASE_DIR_LONG . 'views/');


function seomgr_load_file($path = '') {
    $file_path = SEOMGR_BASE_DIR_LONG . $path;
    if (file_exists($file_path)) {
        require_once($file_path);
    }else{
        echo 'File: '.$file_path.' not found.';
    }
}

/**
 * Loading General Func Files
 */
seomgr_load_file('lib/general.php');

/**
 * Loading Admin 
 */
        
seomgr_load_file('admin/seomgr_admin.php');
new Seomgr_admin();
