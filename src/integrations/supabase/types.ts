export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      api_configurations: {
        Row: {
          created_at: string
          id: string
          is_configured: boolean
          service_name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_configured?: boolean
          service_name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          is_configured?: boolean
          service_name?: string
          updated_at?: string
        }
        Relationships: []
      }
      b2b_batches: {
        Row: {
          created_at: string | null
          id: string
          name: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "b2b_batches_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      b2b_evaluations: {
        Row: {
          batch_id: string | null
          condition: string
          created_at: string | null
          device: string
          id: string
          image_url: string | null
          recommended_action: string | null
          reusability_score: number | null
        }
        Insert: {
          batch_id?: string | null
          condition: string
          created_at?: string | null
          device: string
          id?: string
          image_url?: string | null
          recommended_action?: string | null
          reusability_score?: number | null
        }
        Update: {
          batch_id?: string | null
          condition?: string
          created_at?: string | null
          device?: string
          id?: string
          image_url?: string | null
          recommended_action?: string | null
          reusability_score?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "b2b_evaluations_batch_id_fkey"
            columns: ["batch_id"]
            isOneToOne: false
            referencedRelation: "b2b_batches"
            referencedColumns: ["id"]
          },
        ]
      }
      inventory_items: {
        Row: {
          average_market_price: number | null
          brand: string | null
          category: string | null
          color: string | null
          condition: string | null
          created_at: string | null
          description: string | null
          estimated_value: number | null
          id: string
          image_urls: string[] | null
          listing_status: string | null
          location: string | null
          low_stock_threshold: number | null
          market_data: Json | null
          market_demand_score: number | null
          memory_gb: number | null
          metadata: Json | null
          model_number: string | null
          name: string
          notes: string | null
          price_range_high: number | null
          price_range_low: number | null
          processor: string | null
          quantity: number
          scan_date: string | null
          scan_status: string | null
          screen_size: string | null
          storage_gb: number | null
          supplier: string | null
          unit_price: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          average_market_price?: number | null
          brand?: string | null
          category?: string | null
          color?: string | null
          condition?: string | null
          created_at?: string | null
          description?: string | null
          estimated_value?: number | null
          id?: string
          image_urls?: string[] | null
          listing_status?: string | null
          location?: string | null
          low_stock_threshold?: number | null
          market_data?: Json | null
          market_demand_score?: number | null
          memory_gb?: number | null
          metadata?: Json | null
          model_number?: string | null
          name: string
          notes?: string | null
          price_range_high?: number | null
          price_range_low?: number | null
          processor?: string | null
          quantity?: number
          scan_date?: string | null
          scan_status?: string | null
          screen_size?: string | null
          storage_gb?: number | null
          supplier?: string | null
          unit_price?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          average_market_price?: number | null
          brand?: string | null
          category?: string | null
          color?: string | null
          condition?: string | null
          created_at?: string | null
          description?: string | null
          estimated_value?: number | null
          id?: string
          image_urls?: string[] | null
          listing_status?: string | null
          location?: string | null
          low_stock_threshold?: number | null
          market_data?: Json | null
          market_demand_score?: number | null
          memory_gb?: number | null
          metadata?: Json | null
          model_number?: string | null
          name?: string
          notes?: string | null
          price_range_high?: number | null
          price_range_low?: number | null
          processor?: string | null
          quantity?: number
          scan_date?: string | null
          scan_status?: string | null
          screen_size?: string | null
          storage_gb?: number | null
          supplier?: string | null
          unit_price?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      inventory_scans_backup: {
        Row: {
          average_market_price: number | null
          brand: string | null
          category: string | null
          color: string | null
          condition: string | null
          device_name: string | null
          estimated_value: number | null
          id: string | null
          image_urls: string[] | null
          last_updated: string | null
          market_data: Json | null
          market_demand_score: number | null
          memory_gb: number | null
          model_number: string | null
          notes: string | null
          price_range_high: number | null
          price_range_low: number | null
          processor: string | null
          scan_date: string | null
          scan_status: Database["public"]["Enums"]["scan_status"] | null
          screen_size: string | null
          storage_gb: number | null
          user_id: string | null
        }
        Insert: {
          average_market_price?: number | null
          brand?: string | null
          category?: string | null
          color?: string | null
          condition?: string | null
          device_name?: string | null
          estimated_value?: number | null
          id?: string | null
          image_urls?: string[] | null
          last_updated?: string | null
          market_data?: Json | null
          market_demand_score?: number | null
          memory_gb?: number | null
          model_number?: string | null
          notes?: string | null
          price_range_high?: number | null
          price_range_low?: number | null
          processor?: string | null
          scan_date?: string | null
          scan_status?: Database["public"]["Enums"]["scan_status"] | null
          screen_size?: string | null
          storage_gb?: number | null
          user_id?: string | null
        }
        Update: {
          average_market_price?: number | null
          brand?: string | null
          category?: string | null
          color?: string | null
          condition?: string | null
          device_name?: string | null
          estimated_value?: number | null
          id?: string | null
          image_urls?: string[] | null
          last_updated?: string | null
          market_data?: Json | null
          market_demand_score?: number | null
          memory_gb?: number | null
          model_number?: string | null
          notes?: string | null
          price_range_high?: number | null
          price_range_low?: number | null
          processor?: string | null
          scan_date?: string | null
          scan_status?: Database["public"]["Enums"]["scan_status"] | null
          screen_size?: string | null
          storage_gb?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
      listings: {
        Row: {
          condition: string
          created_at: string | null
          description: string | null
          id: string
          memory: number | null
          name: string
          platform: string | null
          recommended_price: number | null
          release_year: number | null
          status: Database["public"]["Enums"]["listing_status"] | null
          storage: number | null
          user_id: string | null
        }
        Insert: {
          condition: string
          created_at?: string | null
          description?: string | null
          id?: string
          memory?: number | null
          name: string
          platform?: string | null
          recommended_price?: number | null
          release_year?: number | null
          status?: Database["public"]["Enums"]["listing_status"] | null
          storage?: number | null
          user_id?: string | null
        }
        Update: {
          condition?: string
          created_at?: string | null
          description?: string | null
          id?: string
          memory?: number | null
          name?: string
          platform?: string | null
          recommended_price?: number | null
          release_year?: number | null
          status?: Database["public"]["Enums"]["listing_status"] | null
          storage?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "listings_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      sustainability_metrics: {
        Row: {
          carbon_offset_kg: number | null
          created_at: string | null
          id: string
          source_id: string
          source_type: string
          tons_prevented: number | null
          user_id: string | null
        }
        Insert: {
          carbon_offset_kg?: number | null
          created_at?: string | null
          id?: string
          source_id: string
          source_type: string
          tons_prevented?: number | null
          user_id?: string | null
        }
        Update: {
          carbon_offset_kg?: number | null
          created_at?: string | null
          id?: string
          source_id?: string
          source_type?: string
          tons_prevented?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sustainability_metrics_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          created_at: string | null
          email: string
          id: string
          phone: string | null
          role: Database["public"]["Enums"]["user_role"]
        }
        Insert: {
          created_at?: string | null
          email: string
          id: string
          phone?: string | null
          role?: Database["public"]["Enums"]["user_role"]
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          phone?: string | null
          role?: Database["public"]["Enums"]["user_role"]
        }
        Relationships: []
      }
      waitlist: {
        Row: {
          created_at: string
          email: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      listing_status: "draft" | "submitted" | "sold"
      scan_status: "pending" | "completed" | "error"
      user_role: "consumer" | "business"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      listing_status: ["draft", "submitted", "sold"],
      scan_status: ["pending", "completed", "error"],
      user_role: ["consumer", "business"],
    },
  },
} as const
