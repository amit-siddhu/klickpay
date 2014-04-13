# encoding: utf-8
class KlickPay < Sinatra::Application
  get '/' do 
    send_file File.join('public', 'index.html')
  end
end
