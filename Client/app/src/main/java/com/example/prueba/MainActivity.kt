package com.example.prueba

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import android.widget.Toast

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val btnRandomize: Button = findViewById(R.id.randomize)
        val btnChangePage: Button = findViewById(R.id.changePage)
        val textValue: TextView = findViewById(R.id.Text)

        btnRandomize.setOnClickListener{
            val number = rand(50).toString()
            println(number)
            textValue.text = number
        }
        btnChangePage.setOnClickListener{
            goTo("layout2")
        }

    }

    private fun rand(max: Int): Int{
        return (0..max).random()
    }
    private fun goTo(page: String) {
        val layoutId = resources.getIdentifier(page, "layout", packageName)

        println(layoutId)

        if (layoutId == 0) {
            return Toast.makeText(this, "No se encontró diseño para la página: $page", Toast.LENGTH_LONG).show()
        }

        setContentView(layoutId)
    }
}