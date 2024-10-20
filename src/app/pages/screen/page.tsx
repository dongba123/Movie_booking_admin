"use client";
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';


interface Screen {
  name: string;
  location: string;
  seats: any[]; // Change the type to an array of numbers
  city: string;
  screenType: string;
}


const CreateScreenPage: React.FC = () => {

  const tempseatlayout = [
    {
      // platinum
      type: 'platinum',
      rows: [
        {
          // row 2
          rowname: 'A',
          cols: [
            {
              seats: [
                {
                  seat_id: '1'
                },
                {
                  seat_id: '2'
                },

                {
                  seat_id: '3'
                },
                {
                  seat_id: '4'
                },
                {
                  seat_id: '5'
                },
                {
                  seat_id: '6'
                },
                {
                  seat_id: '7'
                },
                {
                  seat_id: '8'
                },
                {
                  seat_id: '9'
                },
                {
                  seat_id: '10'
                },
                {
                  seat_id: '11'
                },
                {
                  seat_id: '12'
                },
                {
                  seat_id: '13'
                },
                {
                  seat_id: '14'
                }
              ]
            },
          ]
        },
        {
          // row 2
          rowname: 'B',
          cols: [
            {
              seats: [
                {
                  seat_id: '1'
                },
                {
                  seat_id: '2'
                },

                {
                  seat_id: '3'
                },
                {
                  seat_id: '4'
                },
                {
                  seat_id: '5'
                },
                {
                  seat_id: '6'
                },
                {
                  seat_id: '7'
                },
                {
                  seat_id: '8'
                },
                {
                  seat_id: '9'
                },
                {
                  seat_id: '10'
                },
                {
                  seat_id: '11'
                },
                {
                  seat_id: '12'
                },
                {
                  seat_id: '13'
                },
                {
                  seat_id: '14'
                }
              ]
            },
          ]
        },
        {
          // row 2
          rowname: 'C',
          cols: [
            {
              seats: [
                {
                  seat_id: '1'
                },
                {
                  seat_id: '2'
                },

                {
                  seat_id: '3'
                },
                {
                  seat_id: '4'
                },
                {
                  seat_id: '5'
                },
                {
                  seat_id: '6'
                },
                {
                  seat_id: '7'
                },
                {
                  seat_id: '8'
                },
                {
                  seat_id: '9'
                },
                {
                  seat_id: '10'
                },
                {
                  seat_id: '11'
                },
                {
                  seat_id: '12'
                },
                {
                  seat_id: '13'
                },
                {
                  seat_id: '14'
                }
              ]
            },
          ]
        },
        {
          // row 2
          rowname: 'D',
          cols: [
            {
              seats: [
                {
                  seat_id: '1'
                },
                {
                  seat_id: '2'
                },

                {
                  seat_id: '3'
                },
                {
                  seat_id: '4'
                },
                {
                  seat_id: '5'
                },
                {
                  seat_id: '6'
                },
                {
                  seat_id: '7'
                },
                {
                  seat_id: '8'
                },
                {
                  seat_id: '9'
                },
                {
                  seat_id: '10'
                },
                {
                  seat_id: '11'
                },
                {
                  seat_id: '12'
                },
                {
                  seat_id: '13'
                },
                {
                  seat_id: '14'
                }
              ]
            },
          ]
        },
        {
          // row 2
          rowname: 'E',
          cols: [
            {
              seats: [
                {
                  seat_id: '1'
                },
                {
                  seat_id: '2'
                },

                {
                  seat_id: '3'
                },
                {
                  seat_id: '4'
                },
                {
                  seat_id: '5'
                },
                {
                  seat_id: '6'
                },
                {
                  seat_id: '7'
                },
                {
                  seat_id: '8'
                },
                {
                  seat_id: '9'
                },
                {
                  seat_id: '10'
                },
                {
                  seat_id: '11'
                },
                {
                  seat_id: '12'
                },
                {
                  seat_id: '13'
                },
                {
                  seat_id: '14'
                }
              ]
            },
          ]
        },
        {
          // row 2
          rowname: 'F',
          cols: [
            {
              seats: [
                {
                  seat_id: '1'
                },
                {
                  seat_id: '2'
                },

                {
                  seat_id: '3'
                },
                {
                  seat_id: '4'
                },
                {
                  seat_id: '5'
                },
                {
                  seat_id: '6'
                },
                {
                  seat_id: '7'
                },
                {
                  seat_id: '8'
                },
                {
                  seat_id: '9'
                },
                {
                  seat_id: '10'
                },
                {
                  seat_id: '11'
                },
                {
                  seat_id: '12'
                },
                {
                  seat_id: '13'
                },
                {
                  seat_id: '14'
                }
              ]
            },
          ]
        },
        {
          // row 2
          rowname: 'G',
          cols: [
            {
              seats: [
                {
                  seat_id: '1'
                },
                {
                  seat_id: '2'
                },

                {
                  seat_id: '3'
                },
                {
                  seat_id: '4'
                },
                {
                  seat_id: '5'
                },
                {
                  seat_id: '6'
                },
                {
                  seat_id: '7'
                },
                {
                  seat_id: '8'
                },
                {
                  seat_id: '9'
                },
                {
                  seat_id: '10'
                },
                {
                  seat_id: '11'
                },
                {
                  seat_id: '12'
                },
                {
                  seat_id: '13'
                },
                {
                  seat_id: '14'
                }
              ]
            },
          ]
        },
        {
          // row 2
          rowname: 'H',
          cols: [
            {
              seats: [
                {
                  seat_id: '1'
                },
                {
                  seat_id: '2'
                },

                {
                  seat_id: '3'
                },
                {
                  seat_id: '4'
                },
                {
                  seat_id: '5'
                },
                {
                  seat_id: '6'
                },
                {
                  seat_id: '7'
                },
                {
                  seat_id: '8'
                },
                {
                  seat_id: '9'
                },
                {
                  seat_id: '10'
                },
                {
                  seat_id: '11'
                },
                {
                  seat_id: '12'
                },
                {
                  seat_id: '13'
                },
                {
                  seat_id: '14'
                }
              ]
            },
          ]
        },
        {
          // row 2
          rowname: 'I',
          cols: [
            {
              seats: [
                {
                  seat_id: '1'
                },
                {
                  seat_id: '2'
                },

                {
                  seat_id: '3'
                },
                {
                  seat_id: '4'
                },
                {
                  seat_id: '5'
                },
                {
                  seat_id: '6'
                },
                {
                  seat_id: '7'
                },
                {
                  seat_id: '8'
                },
                {
                  seat_id: '9'
                },
                {
                  seat_id: '10'
                },
                {
                  seat_id: '11'
                },
                {
                  seat_id: '12'
                },
                {
                  seat_id: '13'
                },
                {
                  seat_id: '14'
                }
              ]
            },
          ]
        },
        {
          // row 2
          rowname: 'J',
          cols: [
            {
              seats: [
                {
                  seat_id: '1'
                },
                {
                  seat_id: '2'
                },

                {
                  seat_id: '3'
                },
                {
                  seat_id: '4'
                },
                {
                  seat_id: '5'
                },
                {
                  seat_id: '6'
                },
                {
                  seat_id: '7'
                },
                {
                  seat_id: '8'
                },
                {
                  seat_id: '9'
                },
                {
                  seat_id: '10'
                },
                {
                  seat_id: '11'
                },
                {
                  seat_id: '12'
                },
                {
                  seat_id: '13'
                },
                {
                  seat_id: '14'
                }
              ]
            },
          ]
        },
        {
          // row 2
          rowname: 'K',
          cols: [
            {
              seats: [
                {
                  seat_id: '1'
                },
                {
                  seat_id: '2'
                },

                {
                  seat_id: '3'
                },
                {
                  seat_id: '4'
                },
                {
                  seat_id: '5'
                },
                {
                  seat_id: '6'
                },
                {
                  seat_id: '7'
                },
                {
                  seat_id: '8'
                },
                {
                  seat_id: '9'
                },
                {
                  seat_id: '10'
                },
                {
                  seat_id: '11'
                },
                {
                  seat_id: '12'
                },
                {
                  seat_id: '13'
                },
                {
                  seat_id: '14'
                }
              ]
            },
          ]
        },
        {
          // row 2
          rowname: 'H',
          cols: [
            {
              seats: [
                {
                  seat_id: '1'
                },
                {
                  seat_id: '2'
                },

                {
                  seat_id: '3'
                },
                {
                  seat_id: '4'
                },
                {
                  seat_id: '5'
                },
                {
                  seat_id: '6'
                },
                {
                  seat_id: '7'
                },
                {
                  seat_id: '8'
                },
                {
                  seat_id: '9'
                },
                {
                  seat_id: '10'
                },
                {
                  seat_id: '11'
                },
                {
                  seat_id: '12'
                },
                {
                  seat_id: '13'
                },
                {
                  seat_id: '14'
                }
              ]
            },
          ]
        }
      ],
      price: 500
    }
  ]

  const [screen, setScreen] = useState<Screen>({
    name: '',
    location: '',
    seats: tempseatlayout,
    city: '',
    screenType: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setScreen({ ...screen, [name]: value });
  };
  const handleScreenTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setScreen({ ...screen, screenType: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (
        screen.name === '' ||
        screen.location === '' ||
        screen.seats.length == 0 ||
        screen.city === '' ||
        screen.screenType === ''
      ) {
        toast.error('Please fill all the fields', {
          position: 'top-center',
        });
        return;
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/movie/createscreen`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(screen),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Screen creation successful', data);

        toast.success('Screen Created Successfully', {
          position: 'top-center',
        });
      } else {
        console.error('Screen creation failed', response.statusText);
        toast.error('Screen Creation Failed', {
          position: 'top-center',
        });
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="formpage">
        <input
        type="text"
        name="name"
        placeholder="Name"
        value={screen.name}
        onChange={handleInputChange}
      />
      <br />
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={screen.location}
        onChange={handleInputChange}
      />
      <br />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={screen.city}
        onChange={handleInputChange}
      />
      <br />
      <div>
        Screen Type:
        <label>
          <input
            type="radio"
            name="screenType"
            value="3D"
            checked={screen.screenType === '3D'}
            onChange={handleScreenTypeChange}
          />
          3D
        </label>
        <label>
          <input
            type="radio"
            name="screenType"
            value="2D"
            checked={screen.screenType === '2D'}
            onChange={handleScreenTypeChange}
          />
          2D
        </label>
        <label>
          <input
            type="radio"
            name="screenType"
            value="4D"
            checked={screen.screenType === '4D'}
            onChange={handleScreenTypeChange}
          />
          4D
        </label>
        <label>
          <input
            type="radio"
            name="screenType"
            value="IMAX"
            checked={screen.screenType === 'IMAX'}
            onChange={handleScreenTypeChange}
          />
          IMAX
        </label>
      </div>
      <br />
      <button onClick={handleSubmit}>Create Screen</button>

    </div>
  )
}

export default CreateScreenPage