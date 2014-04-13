class CreateKeywords < ActiveRecord::Migration
  def change
    create_table :keywords do |t|
      
      t.string :keyword1
      
      t.string :keyword2
      
      t.string :keyword3
      
      t.string :keyword4
      
      t.string :keyword5
      
      t.string :keyword6
      
      t.string :keyword7
      
      t.string :keyword8
      
    end
  end
end
