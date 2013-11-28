/*
 * Generated on <%= (new Date).toISOString().split('T')[0] %>
 * <%= pkg.name %> v<%= pkg.version %>
 * <%= pkg.homepage %>
 *
 * Copyright (c) <%= (new Date).getFullYear() %> <%= pkg.author.name %>
 * Licensed under the MIT license.
 */

'use strict';

// Timer
var timer = require("grunt-timer");

// # Globbing
// for performance reasons we're only matching one level down:
// '<%%= config.src %>/templates/pages/{,*/}*.hbs'
// use this if you want to match all subfolders:
// '<%%= config.src %>/templates/pages/**/*.hbs'

module.exports = function(grunt) {

  // init timer
  timer.init(grunt);

  // Project configuration.
  grunt.initConfig({

    config: {
      src: 'resources',
      dist: '_output'
    },
	
	bgShell: {
        _defaults: {
             bg: true
        },

        watchCompass: {
            cmd: 'compass watch'
        }, 
		
		prodCompass: {
			cmd: 'compass compile -e production --force'
		}
    },
	<% if(modules && modules.length > 0){ %><% if(typeof modules === 'object'){ _.each(modules, function(name, i) { 
				if(name == 'grunticon-sass') { %>
	'grunticon-sass': {
			icons: {
				options: {
					src: '<%%= config.src %>/img/svg/icons',
					dest: '<%%= config.src %>/scss/icons',

					datasvgcss: "_icons.data.svg.scss",
					datapngcss: "_icons.data.png.scss",
					urlpngcss: "_icons.png.scss",

					previewhtml: false,
					loadersnippet: false,

					pngcrush: false,
					pngfolder: "../../../img/png_icons/",
					pngPath: '<%%= config.dist %>/img/png_icons/',

					pseudoselectors: true,
					oneimport: false
				}
			}
		}, <% } %><% if(name == 'dr-grunt-svg-sprites') { %>
	'svg-sprites': {
		options: {
		  paths: {
					spriteElements: "<%%= config.src %>/img/svg",
					sprites: "<%%= config.dist %>/img/sprites",
					css: "<%%= config.src %>/scss/icons"
				},
		  sizes: {
			xlarge: 36,
			large: 24,
			small: 16
		  },
		  refSize: "large",
		  unit: 8,
		},
	}, <% } %><% if(name == 'grunt-packager') { %>
	packager: {
		default: {
			options: {
				config: '<%%= config.dist %>/js/project.jspackcfg',
				cwd: '<%%= config.dist %>/js/'
			}
		}
	}, <% } %><% if(name == 'grunt-browser-sync') { %>
	browser_sync: {
          files: {
              src : '<%%= config.dist %>/css/*.css'
          },
          options: {
			  host: "127.0.0.1",
              watchTask: true
          }
      }, <% } %><% if(name == 'grunt-contrib-compass') { %>
	  compass: {
          dist: {
              options: {
                  config: 'config.rb',  // css_dir = 'dev/css'
                  cssDir: '<%%= config.dist %>/css'
              }
          }
      }, <% } %><% if(name == 'grunt-htmlhint') { %>
		  
      htmlhint: {
          all: {
              options: { // Want to know what configurations are available? http://htmlhint.com/
				htmlhintrc: '.htmlhintrc'
			  },
              src: ['<%%= config.dist %>/*.html']
          }
      }, <% } %><% if(name == 'grunt-prettysass') { %>
		  
      prettysass: {
            options: {
                alphabetize: true,
                indent: "t"
            },
            scss: {
                src: ['<%%= config.src %>/scss/**/*.scss']
            }
        },
	  <% } %><%}); %><%} %><%} %>
    watch: {
      assemble: {
        files: ['<%%= config.src %>/{content,data,templates}/**/{,*/}*.{md,hbs,yml}'],
        tasks: ['assemble']
      },
      livereload: {
        options: {
          livereload: '<%%= connect.options.livereload %>'
        },
        files: [
          '<%%= config.dist %>/{,*/}*.html',
          '<%%= config.dist %>/css/{,*/}*.css', // if you want to use browser-sync for css just comment out this line
          '<%%= config.dist %>/js/{,*/}*.js',
          '<%%= config.dist %>/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%%= config.dist %>/media/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ],
		scss: {
			files: ['<%= config.src %>/scss/{,*/}*.scss']
		}
      }
    },

    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '<%%= config.dist %>'
          ]
        }
      }
    },

    assemble: {
      pages: {
        options: {
          flatten: true,
          assets: '<%%= config.dist %>',
          layout: '<%%= config.src %>/templates/layouts/default.hbs',
          data: '<%%= config.src %>/data/*.{json,yml}',
          helpers: '<%%= config.src %>/helpers/*.js',
          partials: '<%%= config.src %>/templates/partials/**/*.hbs'<% if(plugin && plugin.length > 0){ %>,
          plugins: [<% if(typeof plugin === 'object'){ _.each(plugin, function(name, i) { %>'<%= name %>'<% if(i < (plugin.length - 1)) { %>,<% } }); } else { %>'<%= name %>'<%} %>],<%}
          _.each(plugin, function(name, i) { if(name == 'permalinks') { %>
          permalinks: {
            preset: 'pretty'
          },<% }
          if(name == 'assemble-contrib-contextual') { %>
          contextual: {
            dest: 'tmp/'
          },<% }
          }); %>
        },
        files: {
          '<%%= config.dist %>/': ['<%%= config.src %>/templates/pages/*.hbs']
        }
      }
    },

    // Before generating any new files,
    // remove any previously-created files.
    clean: ['<%%= config.dist %>/**/*.{html,xml}']

  });

  // Load Tasks
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-bg-shell');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  <% if(modules && modules.length > 0){ %><% if(typeof modules === 'object'){ _.each(modules, function(name, i) { %>
  grunt.loadNpmTasks('<%= name %>'); <%}); %><%} %><%} %>
  
 // Simple Tasks
 <% if(modules && modules.length > 0){ %><% if(typeof modules === 'object'){ _.each(modules, function(name, i) { 
	if(name == 'grunticon-sass') { %>
 grunt.registerTask('icons', [
    'grunticon-sass'
  ]); <% } %><% if(name == 'dr-grunt-svg-sprites') { %>
  grunt.registerTask('sprites', [
    'svg-sprites'
  ]); <% } %><% if(name == 'grunt-packager') { %>
  grunt.registerTask('js', [
    'packager'
  ]); <% } %><% if(name == 'grunt-contrib-compass') { %>
  grunt.registerTask('css', [
    'compass:dist'
  ]);<% } %><% if(name == 'grunt-htmlhint') { %>
grunt.registerTask('html', [
    'htmlhint'
  ]);<% } %><% if(name == 'grunt-prettysass') { %>
grunt.registerTask('prettyscss', [
    'prettysass'
  ]);<% } %><%}); %><%} %><%} %>
  grunt.registerTask('cssDev', [
    'bgShell:watchCompass'
  ]);
  grunt.registerTask('cssProd', [
    'bgShell:prodCompass'
  ]);

// Advanced Tasks
  grunt.registerTask('server', [
    'assemble',
    'cssDev',
    'connect:livereload', <% if(modules && modules.length > 0){ %><% if(typeof modules === 'object'){ _.each(modules, function(name, i) { if(name == 'grunt-browser-sync') { %>
	'browser_sync', <% } %><%}); %><%} %><%} %>
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean',
    'cssProd',
	'prettyscss'
	'js',
    'assemble'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

};
