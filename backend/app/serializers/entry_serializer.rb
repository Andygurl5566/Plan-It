class EntrySerializer < ActiveModel::Serializer
  attributes :id, :title, :details, :image, :project_id, :tag
end
