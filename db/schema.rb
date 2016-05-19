# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160519181311) do

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.integer  "level",            default: 1
    t.integer  "xp",               default: 0
    t.integer  "next_level_xp",    default: 10
    t.integer  "energy",           default: 20
    t.integer  "max_energy",       default: 20
    t.integer  "hp",               default: 15
    t.integer  "max_hp",           default: 15
    t.integer  "base_max_hp",      default: 15
    t.integer  "equip_max_hp",     default: 0
    t.integer  "strength",         default: 2
    t.integer  "base_strength",    default: 1
    t.integer  "equip_strength",   default: 1
    t.integer  "hit",              default: 1
    t.integer  "base_hit",         default: 1
    t.integer  "equip_hit",        default: 0
    t.integer  "defence",          default: 2
    t.integer  "base_defence",     default: 1
    t.integer  "equip_defence",    default: 1
    t.integer  "chest_defence",    default: 0
    t.integer  "leg_defence",      default: 1
    t.integer  "helm_defence",     default: 0
    t.integer  "evade",            default: 2
    t.integer  "base_evade",       default: 1
    t.integer  "equip_evade",      default: 1
    t.integer  "shield_evade",     default: 0
    t.integer  "boot_evade",       default: 1
    t.integer  "luck",             default: 1
    t.integer  "base_luck",        default: 1
    t.integer  "equip_luck",       default: 0
    t.text     "equipment"
    t.integer  "gold",             default: 10
    t.string   "weapon",           default: " Stick"
    t.string   "shield",           default: "None"
    t.string   "helm",             default: "None"
    t.string   "chest",            default: "None"
    t.string   "legs",             default: " Swimming Trunks"
    t.string   "gloves",           default: "None"
    t.string   "boots",            default: " Sandals"
    t.string   "ring",             default: "None"
    t.string   "amulet",           default: "None"
    t.integer  "mouse_kills",      default: 0
    t.integer  "rat_kills",        default: 0
    t.integer  "dog_kills",        default: 0
    t.integer  "wolf_kills",       default: 0
    t.integer  "goblin_kills",     default: 0
    t.integer  "orc_kills",        default: 0
    t.integer  "ogre_kills",       default: 0
    t.integer  "potion_price",     default: 100
    t.datetime "energy_time"
    t.datetime "hp_time"
    t.datetime "created_at",                                    null: false
    t.datetime "updated_at",                                    null: false
    t.integer  "points",           default: 2
    t.string   "message"
    t.string   "othermessage"
    t.text     "shopTier",         default: "1"
    t.string   "email",                                         null: false
    t.string   "crypted_password",                              null: false
    t.string   "salt",                                          null: false
  end

end
