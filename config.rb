activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

configure :development do
  activate :livereload, host: 'localhost', apply_css_live: true, apply_js_live: true, no_swf: true
end

configure :build do
  activate :minify_css
  activate :minify_javascript, compressor: proc { ::Uglifier.new harmony: true }
end

helpers do
  def svg_image_tag(image, id, *args, **kwargs)
    path = image_path image
    content_tag :svg, *args, **kwargs do
      tag :use, 'xlink:href': "#{path}##{id}"
    end
  end
end
