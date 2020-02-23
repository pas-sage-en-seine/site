activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

page 'index.html', layout: :content

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false
page '/presse.html*', :layout => 'presse'

configure :development do
  activate :livereload, host: 'localhost', apply_css_live: true, apply_js_live: true, no_swf: true
end

configure :build do
  #activate :minify_css
  #activate :minify_javascript, compressor: proc { ::Uglifier.new harmony: true }
  # activate :asset_hash
  #set :http_prefix, '/tmp'
end

activate :deploy do |deploy|
  deploy.deploy_method = :rsync
  deploy.host          = 'rabbit.passageenseine.fr'
  deploy.user          = root
  deploy.path          = '/var/www/pses'
  deploy.port          = 2222
  deploy.build_before  = true
  # Optional Settings
  # deploy.user  = 'tvaughan' # no default
  # deploy.port  = 5309 # ssh port, default: 22
  # deploy.clean = true # remove orphaned files on remote host, default: false
  # deploy.flags = '-rltgoDvzO --no-p --del' # add custom flags, default: -avz
end

helpers do
  def svg_image_tag(image, id, *args, **kwargs)
    path = image_path image
    content_tag :svg, *args, **kwargs do
      tag :use, 'xlink:href': "#{path}##{id}"
    end
  end
end
