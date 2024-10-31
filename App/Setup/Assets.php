<?php
/**
 * @package notwiz-calendar-block
 * @author kmix39
 * @license GPL-2.0+
 */

namespace Not_Wiz\Calendar\Block\App\Setup;

use Not_Wiz\Calendar\Block;

class Assets {
	public function __construct() {
		add_action( 'enqueue_block_editor_assets', [ $this, '_enqueue_block_editor_assets' ] );
		add_filter( 'block_editor_settings', [ $this, '_block_editor_settings' ] );
		add_action( 'wp_enqueue_scripts', [ $this, '_wp_enqueue_scripts' ] );
		add_filter( 'plugin_row_meta', [ $this, '_plugin_row_meta' ], 10, 2 );
	}

	public function _plugin_row_meta( $plugin_meta, $plugin_file ) {
		if ( NOTWIZ_CALENDAR_BLOCK_PLUGIN_BASENAME === $plugin_file ) {
			$row_meta = [
				'docs' => '<a href="https://not-wiz.net/calendar-block" aria-label="' . esc_attr( __( 'View Documentation', 'notwiz-calendar-block-editor' ) ) . '" target="_blank">' . __( 'Documentation', 'notwiz-calendar-block' ) . '</a>',
			];
			$plugin_meta = array_merge( $plugin_meta, $row_meta );
		}
		return $plugin_meta;
	}

	public function _enqueue_block_editor_assets() {
		wp_enqueue_script(
			'notwiz-calendar-block-editor',
			NOTWIZ_CALENDAR_BLOCK_DIR_URL . '/assets/js/blocks-build.js',
			[ 'wp-blocks', 'wp-element', 'wp-i18n' ],
			filemtime( NOTWIZ_CALENDAR_BLOCK_DIR_PATH . '/assets/js/blocks-build.js' ),
			true
		);

		if ( function_exists( 'gutenberg_get_jed_locale_data' ) ) {
			$locale  = gutenberg_get_jed_locale_data( 'notwiz-calendar-block' );
			$content = 'wp.i18n.setLocaleData( ' . json_encode( $locale ) . ', "notwiz-calendar-block" );';
			wp_add_inline_script(
				'notwiz-calendar-block-editor',
				$content,
				'before'
			);
		} elseif ( function_exists( 'wp_set_script_translations' ) ) {
			wp_set_script_translations(
				'notwiz-calendar-block-editor',
				'notwiz-calendar-block',
				NOTWIZ_CALENDAR_BLOCK_DIR_PATH . '/languages'
			);
		}
		wp_localize_script(
			'notwiz-calendar-block-editor',
			'nwcb',
			[
				'pluginURL' => NOTWIZ_CALENDAR_BLOCK_DIR_URL,
				'pluginDir' => NOTWIZ_CALENDAR_BLOCK_DIR_PATH,
			]
		);
	}

	public function _block_editor_settings( $editor_settings ) {
		if ( ! Block\is_block_editor() ) {
			return $editor_settings;
		}
		if ( ! isset( $editor_settings['styles'] ) ) {
			return $editor_settings;
		}
		$editor_settings['styles'][] = [
			'css' => file_get_contents( NOTWIZ_CALENDAR_BLOCK_DIR_PATH . '/assets/css/blocks-editor.min.css' ),
		];
		return $editor_settings;
	}

	public function _wp_enqueue_scripts() {
		wp_enqueue_style(
			'notwiz-calendar-block',
			NOTWIZ_CALENDAR_BLOCK_DIR_URL . '/assets/css/blocks.min.css',
			[],
			filemtime( NOTWIZ_CALENDAR_BLOCK_DIR_PATH . '/assets/css/blocks.min.css' )
		);
	}

}
