class EntrySerializer < ActiveModel::Serializer
  attributes :id, :title, :details, :image, :project_id, :tag, :due_date, :due_year, :due_month
end
