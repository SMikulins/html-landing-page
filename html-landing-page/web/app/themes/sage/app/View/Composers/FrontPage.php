<?php

    namespace App\View\Composers;

    use Roots\Acorn\View\Composer;

    class FrontPage extends Composer {
        /**
         * List of views served by this composer.
         *
         * @var array
         */
        protected static $views = [
            'front-page',
        ];

        /**
         * Data to be passed to view before rendering, but after merging.
         *
         * @return array
         */
        public function with() {
            return [
                'banner'            => $this->banner(),
                'image_and_content' => $this->image_and_content(),
                'stats'             => $this->stats(),
                'form'              => $this->form(),
            ];
        }

        public function banner() {
            return get_field( 'banner' );
        }

        public function image_and_content() {
            return get_field( 'image_and_content' );
        }

        public function stats() {
            $stats        = get_field( 'stats' );
            $stats_length = [ "stats_length" => '0' ];
            if ( ! empty( $stats['stat'] ) > 0 ) {
                $stats_length = [ "stats_length" => count( $stats['stat'] ) ];
            }

            return array_merge( $stats, $stats_length );
        }

        public function form() {
            $form = get_field( 'form' );
            foreach ( $form['background_colors'] as $index => $item ) {
                $form[ $index ] = $item;
            }

            return $form;
        }

    }
